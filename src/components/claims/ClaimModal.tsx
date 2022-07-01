import { Anchor, Badge, Divider, Group, Modal, Stack, Text, Title } from "@mantine/core"
import moment from "moment"
import { Calendar, CurrencyDollarSingapore } from "tabler-icons-react"
import { Claim } from "../../types/claim"
import ptBadgeColor from "../../utils/ptBadgeColor"

interface ClaimModalProps {
	claim: Claim | null
	close: () => void
}

export default function ClaimModal(props: ClaimModalProps) {
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
			</Stack>
		</Modal>
	)
}