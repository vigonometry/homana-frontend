import { useLazyQuery } from "@apollo/client"
import { Box, Group, Stack, Title } from "@mantine/core"
import { useContext, useEffect } from "react"
import PoliciesTakenGrid from "../components/policies/PoliciesTakenGrid"
import { GET_CURRENT_POLICIES_TAKEN } from "../queries/policyTaken"
import { UserContext } from "../services/userContextProvider"

function ApplicationsPage() {
	const { user, setUser } = useContext(UserContext)
	const [getCurrentPolicies] = useLazyQuery(GET_CURRENT_POLICIES_TAKEN, {
		onCompleted: ({ currentUser }) => {
			console.log(currentUser)
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
					<Title order={2}>Applications</Title>
				</Group>
				<PoliciesTakenGrid withControls policiesTaken={user.policiesTaken || []}/>
			</Stack>
		</Box>
	)
}

export default ApplicationsPage