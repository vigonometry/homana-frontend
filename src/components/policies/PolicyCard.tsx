import { Anchor, Badge, Card, Group, Stack, Text, Title } from "@mantine/core"
import { Policy } from "../../types/policy"

interface PolicyCardProps {
	policy: Policy
	mini?: boolean
	onClick: () => void
}

function PolicyCard(props: PolicyCardProps) {
	return (
		<Card onClick={props.onClick} className="fade-on-hover" withBorder p='md' shadow='sm'>
			<Stack spacing={24}>
				<Group position="apart">
					<Title order={4}>{props.policy.title}</Title>
					{props.mini && <Badge>{props.policy.type}</Badge>}
				</Group>
				{
					!props.mini && (
						<Stack spacing='sm'>
							<Stack spacing={0}>
								<Title order={5}>Next payment</Title>
								<Text>{props.policy.nextPayment.getDate()}-{props.policy.nextPayment.getMonth()}-{props.policy.nextPayment.getFullYear()}</Text>
							</Stack>
							<Stack spacing={0}>
								<Title order={5}>Dependants</Title>
								{props.policy.dependants.length > 0 && <Group>{props.policy.dependants.map(x => <Anchor>{x}</Anchor>)}</Group>}
								{props.policy.dependants.length === 0 && <Text color='dimmed'>None</Text> }
							</Stack>
						</Stack>
					)
				}
				{!props.mini && <Group><Badge>{props.policy.type}</Badge></Group>}
			</Stack>
		</Card>
	)
}

export default PolicyCard