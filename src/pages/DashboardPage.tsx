import { Box, Stack, Title } from "@mantine/core"

interface DashboardPageProps {}

function DashboardPage(props: DashboardPageProps) {
	return (
		<Box p='xl'>
			<Stack>
				<Title order={2}>Dashboard</Title>
			</Stack>
		</Box>
	)
}

export default DashboardPage