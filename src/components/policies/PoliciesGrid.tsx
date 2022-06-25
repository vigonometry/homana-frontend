import { Anchor, Badge, Card, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { Policy } from "../../types/policy";

interface PoliciesGridProps {
	policies: Policy[]
	mini?: boolean | undefined
}

function PoliciesGrid(props: PoliciesGridProps) {
	return (
		<SimpleGrid breakpoints={[{ minWidth: 'sm', cols: 1}, { minWidth: 'md', cols: 2}, { minWidth: 'lg', cols: 3}]}>
			{
				props.policies.map(p => ({...p, nextPayment: new Date(p.nextPayment)})).map(p => (
					<Card className="fade-on-hover" withBorder p='md' shadow='sm'>
						<Stack spacing={24}>
							<Group position="apart">
								<Title order={4}>{p.title}</Title>
								{props.mini && <Badge>{p.type}</Badge>}
							</Group>
							{
								!props.mini && (
									<Stack spacing='sm'>
										<Stack spacing={0}>
											<Title order={5}>Next payment</Title>
											<Text>{p.nextPayment.getDate()}-{p.nextPayment.getMonth()}-{p.nextPayment.getFullYear()}</Text>
										</Stack>
										<Stack spacing={0}>
											<Title order={5}>Dependants</Title>
											{p.dependants.length > 0 && <Group>{p.dependants.map(x => <Anchor>{x}</Anchor>)}</Group>}
											{p.dependants.length === 0 && <Text color='dimmed'>None</Text> }
										</Stack>
									</Stack>
								)
							}
							{!props.mini && <Group><Badge>{p.type}</Badge></Group>}
						</Stack>
					</Card>
				))
			}
		</SimpleGrid>
	)
}

export default PoliciesGrid;