import { Avatar, Badge, Button, Divider, Group, Modal, Stack, Text, Title } from "@mantine/core"
import { useContext } from "react"
import { UserContext } from "../../services/userContextProvider"
import { PolicyTaken } from "../../types/policy"
import ptBadgeColor from "../../utils/ptBadgeColor"

interface PolicyTakenModalProps {
	policyTaken: PolicyTaken | null
	close: () => void
}

function PolicyTakenModal(props: PolicyTakenModalProps) {
	const { user } = useContext(UserContext)
	return (
		<Modal opened={!!props.policyTaken} onClose={props.close} title={props.policyTaken?.policy?.title} styles={{title: { fontWeight: 'bold', fontSize: 22, }, header: { marginBottom: 4}}}>
			<Badge size="md" color={ptBadgeColor(props.policyTaken?.status || '')}>{props.policyTaken?.status}</Badge>
			<Stack spacing='sm' mt='lg'>
				<Divider/>
				<Stack spacing='xs' p='sm'>
					<Title order={4}>Agent Details</Title>
					<Group>
						<Avatar size='md' color='grape'>{props.policyTaken?.agent?.name?.charAt(0)}</Avatar>
						<Stack spacing={0}>
							<Text size="sm">{props.policyTaken?.agent?.name}</Text>
							<Text size="xs" color='dimmed'>{props.policyTaken?.agent?.email}</Text>
						</Stack>
					</Group>
				</Stack>
				<Divider/>
				<Stack spacing='xs' p='sm'>
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
						<>
							<Divider/>
							<Stack spacing='xs' py='sm'>
								<Group>
									<Button>Sign and Apply</Button>
									<Text size='xs' color='dimmed'>By clicking Sign and Apply, ...</Text>
								</Group>
								
							</Stack>
						</>
					)
				}
			</Stack>
		</Modal>
	)
}

export default PolicyTakenModal