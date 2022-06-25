import { Box, Group, Stack, Title } from "@mantine/core";
import { useContext } from "react";
import PoliciesGrid from "../components/policies/PoliciesGrid";
import { SAMPLE_POLICIES } from "../constants/sample";
import { UserContext } from "../services/userContextProvider";

interface PoliciesPageProps {}

function PoliciesPage(props: PoliciesPageProps) {
	const { user } = useContext(UserContext)
	if (!user) return <></>
	return (
		<Box p='xl'>
			<Stack>
				<Group position="apart">
					<Title order={2}>Your Policies</Title>
				</Group>
				<PoliciesGrid policies={SAMPLE_POLICIES}/>
			</Stack>
		</Box>
	)
}

export default PoliciesPage