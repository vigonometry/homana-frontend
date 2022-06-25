import { Badge, Box, Button, Card, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import PoliciesGrid from "../components/policies/PoliciesGrid";
import { SAMPLE_POLICIES } from "../constants/sample";

interface PoliciesPageProps {}

function PoliciesPage(props: PoliciesPageProps) {
	return (
		<Box p='xl'>
			<Stack>
				<Group>
					<Title order={2}>Your Policies</Title>
				</Group>
				<PoliciesGrid policies={SAMPLE_POLICIES}/>
			</Stack>
		</Box>
	)
}

export default PoliciesPage