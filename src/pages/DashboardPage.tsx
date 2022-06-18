import { Box, Stack, Text, Title } from "@mantine/core"

interface DashboardPageProps {}

function DashboardPage(props: DashboardPageProps) {
	return (
		<Box p='xl'>
			<Stack>
				<Title order={2}>Dashboard</Title>
				<Text>TODO: Recent Claims, Policy Notifications</Text>
			</Stack>
		</Box>
	)
}

export default DashboardPage