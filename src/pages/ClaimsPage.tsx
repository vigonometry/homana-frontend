import { Box, Button, Group, Stack, Text, Title } from "@mantine/core";
import ClaimsTable from "../components/claims/ClaimsTable";
import { SAMPLE_CLAIMS } from "../constants/sample";

interface ClaimsPageProps {}

function ClaimsPage(props: ClaimsPageProps) {
	return (
		<Box p='xl'>
			<Stack>
				<Group position="apart">
					<Title order={2}>Claims</Title>
					<Button variant="light">New Claim</Button>
				</Group>
				<ClaimsTable claims={SAMPLE_CLAIMS}/>
			</Stack>
		</Box>
	)
}

export default ClaimsPage;