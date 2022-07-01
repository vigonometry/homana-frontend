import { useLazyQuery } from "@apollo/client";
import { Box, Group, Stack, Title } from "@mantine/core";
import { useContext, useEffect } from "react";
import PoliciesGrid from "../components/policies/PoliciesGrid";
import PoliciesTakenGrid from "../components/policies/PoliciesTakenGrid";
import { GET_CURRENT_POLICIES_TAKEN } from "../queries/policyTaken";
import { UserContext } from "../services/userContextProvider";

interface PoliciesPageProps {}

function PoliciesPage(props: PoliciesPageProps) {
	const { user, setUser } = useContext(UserContext)
	const [getCurrentPolicies] = useLazyQuery(GET_CURRENT_POLICIES_TAKEN, {
		onCompleted: ({ currentUser }) => {
			setUser({...user, ...currentUser})
		},
		fetchPolicy: 'no-cache'
	})
	useEffect(() => {
		if (user && !user.policiesTaken) getCurrentPolicies()
	}, [user, getCurrentPolicies])
	if (!user) return <></>
	return (
		<Box p='xl'>
			<Stack>
				<Group position="apart">
					<Title order={2}>Your Policies</Title>
				</Group>
				{ user.__typename === 'Client' && <PoliciesTakenGrid policiesTaken={user.policiesTaken || []}/>}
				{ user.__typename === 'Broker' && <PoliciesGrid policies={user.policies}/> }
			</Stack>
		</Box>
	)
}

export default PoliciesPage