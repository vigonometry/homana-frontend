import { useMutation } from "@apollo/client"
import { Anchor, Badge, Button, Divider, Group, Modal, Stack, Text, Title } from "@mantine/core"
import moment from "moment"
import { userInfo } from "os"
import { useContext } from "react"
import { Calendar, CurrencyDollarSingapore, Mail, Typography } from "tabler-icons-react"
import { CLAIM_CANCEL, CLAIM_NEXT_STEP } from "../../queries/claims"
import { UserContext } from "../../services/userContextProvider"
import { Callbacks } from "../../types/callbacks"
import { Claim } from "../../types/claim"
import ptBadgeColor from "../../utils/ptBadgeColor"

interface ClaimModalProps {
	claim: Claim | null
	callbacks: Callbacks<Claim>
	close: () => void
}

export default function ClaimModal(props: ClaimModalProps) {
	const { user } = useContext(UserContext)
	const [claimNext] = useMutation(CLAIM_NEXT_STEP, {
		variables: { _id: props.claim?._id, status: props.claim?.status},
		onCompleted: ({ claimNext }) => {
			if (claimNext.response && props.claim) {
				props.callbacks.update({...props.claim, status: claimNext.response})
				props.close()
			} else {
				console.log(claimNext.error)
			}
		}
	})
	const [claimCancel] = useMutation(CLAIM_CANCEL, {
		variables: { _id: props.claim?._id, status: props.claim?.status},
		onCompleted: ({ claimCancel }) => {
			if (claimCancel.response && props.claim) {
				props.callbacks.update({...props.claim, status: claimCancel.response})
				props.close()
			} else {
				console.log(claimCancel.error)
			}
		}
	})
	return (
		<Modal opened={!!props.claim} onClose={props.close} styles={{title: { fontWeight: 'bold'}, header: { marginBottom: 4}}} title='Claim Details'>
			<Badge size="md" color={ptBadgeColor(props.claim?.status || '')}>{props.claim?.status}</Badge>
			<Stack spacing={36} mt={36}>
				<Stack spacing={4}>
					<Title order={6}>Claim ID</Title>
					<Text size="sm">{props.claim?._id}</Text>
				</Stack>
				<Stack spacing={4}>
					<Title order={6}>Receipt Details</Title>
					<Group>
						<CurrencyDollarSingapore size={16}/>
						<Text size="sm">{props.claim?.receiptAmount}</Text>
					</Group>
					<Group>
						<Calendar size={16}/>
						<Text size="sm">{moment(props.claim?.receiptDate).format('DD/MM/YYYY, hh:mm A')}</Text>
					</Group>
				</Stack>
				<Stack spacing={4}>
					<Title order={6}>Claim Details</Title>
					<Group>
						<CurrencyDollarSingapore size={16}/>
						<Text size="sm">{props.claim?.claimAmount}</Text>
					</Group>
					<Group>
						<Calendar size={16}/>
						<Text size="sm">{moment(props.claim?.claimDate).format('DD/MM/YYYY, hh:mm A')}</Text>
					</Group>
				</Stack>
				<Stack spacing={4}>
					<Title order={6}>Attachments</Title>
					<Group>
						{props.claim?.attachments.map(a => (
							<Anchor>{a}</Anchor>
						))}
					</Group>
				</Stack>
				{
					user?.__typename !== 'Client' &&
					<Stack spacing={4}>
						<Title order={6}>Client Details</Title>
						<Group>
							<Typography size={16}/>
							<Text size="sm">{props.claim?.client?.name}</Text>
						</Group>
						<Group>
							<Mail size={16}/>
							<Text size="sm">{props.claim?.client?.email}</Text>
						</Group>
					</Stack>
				}
				{
					((user?.__typename === 'Agent' && props.claim?.status === 'SUBMITTED') || (user?.__typename === 'Broker' && props.claim?.status === 'PROCESSING')) &&
					<Group position="apart">
						<Button onClick={() => claimNext()}>Sign and Approve</Button>
						<Button onClick={() => claimCancel()} color='red'>Reject</Button>
					</Group>
				}
			</Stack>
		</Modal>
	)
}