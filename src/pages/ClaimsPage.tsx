import { Box, Stack, Text, Title } from "@mantine/core";
import ClaimsTable from "../components/claims/ClaimsTable";

interface ClaimsPageProps {}

function ClaimsPage(props: ClaimsPageProps) {
	return (
		<Box p='xl'>
			<Stack>
				<Title order={2}>Claims</Title>
				<ClaimsTable/>
			</Stack>
		</Box>
	)
}

export default ClaimsPage;