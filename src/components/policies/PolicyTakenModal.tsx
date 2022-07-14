import { useMutation } from "@apollo/client"
import { Avatar, Badge, Button, Group, Modal, Stack, Text, Title } from "@mantine/core"
import { useContext, useState } from "react"
import { useLazyQuery, useMutation } from "@apollo/client"
import { READ_DEPENDANTS } from "../../queries/dependants"
import { POLICY_TAKEN_CANCEL, POLICY_TAKEN_NEXT_STEP, UPDATE_PT_DEPENDANTS } from "../../queries/policyTaken"
import { UserContext } from "../../services/userContextProvider"
import { Callbacks } from "../../types/callbacks"
import { PolicyTaken } from "../../types/policy"
import ptBadgeColor from "../../utils/ptBadgeColor"
import { signDocumentClient, approveDocumentBC, rejectDocumentBC, getSignerAddress, rejectDocumentClient } from "../../utils/contractUtils"
interface PolicyTakenModalProps {
	policyTaken: PolicyTaken | null
	close: () => void
	callbacks: Callbacks<PolicyTaken>
}

function PolicyTakenModal(props: PolicyTakenModalProps) {
	const [client, setClient] = useState('')
	const { user, setUser } = useContext(UserContext)
	const [policyNext] = useMutation(POLICY_TAKEN_NEXT_STEP, {
		variables: { _id: props.policyTaken?._id, status: props.policyTaken?.status},
		onCompleted: ({ policyTakenNext }) => {
			if (policyTakenNext.response && props.policyTaken) {
				props.callbacks.update({...props.policyTaken, status: policyTakenNext.response})
				props.close()
				user?.__typename === 'Broker' ? approveDocumentBC(policyTakenNext.response) : signDocumentClient(policyTakenNext.response)
			} else {
				console.log(policyTakenNext.error)
			}
		}
	})


	const handlePolicyNext = () => {
		getSignerAddress().then(res => setClient(res));
		policyNext();
	}

	const [policyCancel] = useMutation(POLICY_TAKEN_CANCEL, {
		variables: { _id: props.policyTaken?._id, status: props.policyTaken?.status},
		onCompleted: ({ policyTakenCancel }) => {
			if (policyTakenCancel.response && props.policyTaken) {
				props.callbacks.update({...props.policyTaken, status: policyTakenCancel.response})
				props.close()
				user?.__typename === 'Broker' ?  rejectDocumentBC(policyTakenCancel.response) : rejectDocumentClient(policyTakenCancel.response)
			} else {
				console.log(policyTakenCancel.error)
			}
		}
	})

	const handlePolicyCancel = () => {
		getSignerAddress().then(res => setClient(res));
		policyCancel();
	}
  
	const [getDependants] = useLazyQuery(READ_DEPENDANTS, {
		onCompleted: ({ currentUser }) => {
			setUser({...user, ...currentUser})
		}
	})
	useEffect(() => {
		if (user?.__typename === 'Client' && !user.dependants) {
			getDependants()
		}
	}, [user])
	const [deps, setDeps] = useState<string[]>([])
	const [updatePTDependants] = useMutation(UPDATE_PT_DEPENDANTS, {
		variables: {
			_id: props.policyTaken?._id,
			dependants: deps
		},
		onCompleted: ({ updatePTDependants }) => {
			if (updatePTDependants.response) {
				policyNext()
			}
		}
	})
	return (
		<Modal opened={!!props.policyTaken} onClose={props.close} title={props.policyTaken?.policy?.title} styles={{title: { fontWeight: 'bold', fontSize: 22, }, header: { marginBottom: 4}}}>
			<Badge size="md" color={ptBadgeColor(props.policyTaken?.status || '')}>{props.policyTaken?.status}</Badge>
			<Stack spacing={36} mt={36}>
				<Stack spacing='xs'>
					<Title order={4}>Agent Details</Title>
					<Group>
						<Avatar size='md' color='grape'>{props.policyTaken?.agent?.name?.charAt(0)}</Avatar>
						<Stack spacing={0}>
							<Text size="sm">{props.policyTaken?.agent?.name}</Text>
							<Text size="xs" color='dimmed'>{props.policyTaken?.agent?.email}</Text>
						</Stack>
					</Group>
				</Stack>
				<Stack spacing='xs'>
					<Title order={4}>Quotation Details</Title>
					<Group>
						<Stack spacing={0}>
							<Group mb='sm'>
								<Text size="sm" weight='bold'>Policy Title</Text>
								<Text size="sm">{props.policyTaken?.policy?.title}</Text>
							</Group>
							<Group>
								<Text size="sm" weight='bold'>Insured Amount</Text>
								<Text size="sm">S$ {props.policyTaken?.insuredAmount}</Text>
							</Group>
							<Group>
								<Text size="sm" weight='bold'>Monthly Premium</Text>
								<Text size="sm">S$ {props.policyTaken?.premium}</Text>
							</Group>
						</Stack>
					</Group>
				</Stack>
				{
					user?.__typename === 'Client' && props.policyTaken?.status === 'QUOTED' && (
						<Stack spacing='xs'>
							<Title order={4}>Add Dependants</Title>
							<MultiSelect value={deps} onChange={setDeps} data={user.dependants || []}/>
						</Stack>
					)
				}
				{
					props.policyTaken?.status !== 'QUOTED' && props.policyTaken && props.policyTaken.dependants && props.policyTaken.dependants.length > 0 && (
						<Stack spacing='xs'>
							<Title order={4}>Dependants</Title>
							<List>
								{props.policyTaken.dependants.map(d => (
									<List.Item>{d}</List.Item>
								))}
							</List>
						</Stack>
					)
				}
				{
					(((user?.__typename === 'Client' && props.policyTaken?.status === 'QUOTED')) || ((user?.__typename === 'Broker' && props.policyTaken?.status === 'APPLIED'))) && (
						<>
							<Stack spacing='xs' py='sm'>
								<Group position="apart">
									<Button onClick={handlePolicyNext}>Sign and {user.__typename === 'Broker'? 'Approve' : 'Apply'}</Button>
									<Button color='red' onClick={handlePolicyCancel}>Reject</Button>
								</Group>
								<Text size='xs' color='dimmed'>By clicking Sign and {user.__typename === 'Broker'? 'Approve' : 'Apply'}, ...</Text>
							</Stack>
						</>
					)
				}
			</Stack>
		</Modal>
	)
}

export default PolicyTakenModal