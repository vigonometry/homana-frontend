import { Badge, Card, Group, Stack, Text, Title } from "@mantine/core"
import moment from "moment"
import { useContext } from "react"
import { UserContext } from "../../services/userContextProvider"
import { PolicyTaken } from "../../types/policy"
import ptBadgeColor from "../../utils/ptBadgeColor"

interface PolicyTakenCardProps {
	policyTaken: PolicyTaken
	mini?: boolean
	onClick: () => void
}

function PolicyTakenCard(props: PolicyTakenCardProps) {
	const { user } = useContext(UserContext)
	if (!user) return <></>
	return (
		<Card onClick={props.onClick} className="fade-on-hover" withBorder p='md' shadow='sm'>
			<Stack spacing={24}>
				<Group position="apart">
					<Title order={4}>{props.policyTaken.policy?.title}</Title>
					{props.mini && <Badge>{props.policyTaken.policy?.type}</Badge>}
				</Group>
				{
					props.policyTaken.status === 'APPROVED' && !props.mini && (
						<Stack spacing='sm'>
							<Stack spacing={0}>
								<Title order={5}>Next Payment</Title>
								<Text>{moment(new Date()).add('1', 'M').format('DD-MM-YYYY')}</Text>
							</Stack>
						</Stack>
					)
				}
				{
					props.policyTaken.status !== 'APPROVED' && !props.mini && (
						<Stack spacing='sm'>
							<Stack spacing={0}>
								<Title order={5}>Last Updated</Title>
								<Text>{moment(props.policyTaken.date).format("DD-MM-YYYY, hh:mm A")}</Text>
							</Stack>
						</Stack>
					)
				}
				{!props.mini && <Group spacing='xs'>
					<Badge>{props.policyTaken.policy?.type}</Badge>
					{ props.policyTaken.status !== 'APPROVED' && <Badge color={ptBadgeColor(props.policyTaken.status)}>{props.policyTaken.status}</Badge>}
				</Group>}
			</Stack>
		</Card>
	)
}

export default PolicyTakenCard