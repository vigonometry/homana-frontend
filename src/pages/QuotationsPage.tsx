import { useLazyQuery } from "@apollo/client";
import { Box, Stack, Title } from "@mantine/core";
import { useContext, useEffect } from "react";
import QuotationsTable from "../components/quotations/QuotationsTable";
import { GET_CURRENT_POLICIES_TAKEN } from "../queries/policyTaken";
import { UserContext } from "../services/userContextProvider";

function QuotationsPage() {
	const { user, setUser } = useContext(UserContext)
	const [getCurrentQuotations] = useLazyQuery(GET_CURRENT_POLICIES_TAKEN, {
		onCompleted: ({ currentUser }) => {
			setUser({...user, ...currentUser})
		},
		fetchPolicy: 'no-cache'
	})
	useEffect(() => {
		if (user && !user.policiesTaken) getCurrentQuotations()
	}, [user, getCurrentQuotations])
	
	return (
		<Box p='xl'>
			<Stack>
				<Title order={2}>Quotations</Title>
				<QuotationsTable refresh={() => getCurrentQuotations()} quotations={user?.policiesTaken || []}/>
			</Stack>
		</Box>
	)
}

export default QuotationsPage;