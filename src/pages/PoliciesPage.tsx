import { Box, Stack, Text, Title } from "@mantine/core";

interface PoliciesPageProps {}

function PoliciesPage(props: PoliciesPageProps) {
	return (
		<Box p='xl'>
			<Stack>
				<Title order={2}>Policies</Title>
				<Text>TODO: Add Policy Application and Status</Text>
			</Stack>
		</Box>
	)
}

export default PoliciesPage;