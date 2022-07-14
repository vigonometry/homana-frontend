import { Group, Title } from "@mantine/core";
import { useContext } from "react";
import ClaimsTable from "../components/claims/ClaimsTable";
import PageContainer from "../components/containers/PageContainer";
import { UserContext } from "../services/userContextProvider";

// For the client, display all the claims with segmented control
// For the agent and broker, display all claims awaiting approval

function ClaimsPage() {
	const { user } = useContext(UserContext)
	return (
		<PageContainer>
			<Title order={2}>Claims</Title>
			<ClaimsTable withControls/>
		</PageContainer>
	)
}

export default ClaimsPage;