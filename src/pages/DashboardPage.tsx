import { useLazyQuery } from "@apollo/client"
import { Group, Stack, Title } from "@mantine/core"
import { useContext, useEffect } from "react"
import ClaimsTable from "../components/claims/ClaimsTable"
import PageContainer from "../components/containers/PageContainer"
import PoliciesTakenGrid from "../components/policies/PoliciesTakenGrid"
import QuotationsTable from "../components/quotations/QuotationsTable"
import { GET_CURRENT_POLICIES_TAKEN } from "../queries/policyTaken"
import { UserContext } from "../services/userContextProvider"

export default function DashboardPage() {
	const { user } = useContext(UserContext)
	return (
		<PageContainer>
			<Group position="apart">
				<Title order={2}>Dashboard</Title>
			</Group>
			{
				user?.__typename === 'Broker' ? <BrokerDashboard/> :
					user?.__typename === 'Agent' ? <AgentDashboard/> :
						<CustomerDashboard/>
			}
		</PageContainer>
	)
}

function CustomerDashboard() {
	// RECENT CLAIMS + POLICIES
	const { user } = useContext(UserContext)
	return (
		<>
		<Stack mt='xl'>
			<Title order={4}>Recent Claims</Title>
			<ClaimsTable limit={5}/>
		</Stack>
		<Stack mt='xl'>
			<Title order={4}>Your Policies</Title>
			<PoliciesTakenGrid policiesTaken={user?.policiesTaken || []}/>
		</Stack>
		</>
	)
}

function AgentDashboard() {
	// CLAIMS + APPLICATIONS + NUMBER
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
		<>
		<Stack mt='xl'>
			<Title order={4}>Claims Pending Approval</Title>
			<ClaimsTable limit={5}/>
		</Stack>
		<Stack mt='xl'>
			<Title order={4}>Recent Quotations</Title>
			<QuotationsTable refresh={() => getCurrentQuotations()} quotations={user?.policiesTaken || []}/>
		</Stack>
		</>
	)
}

function BrokerDashboard() {
	// CLAIMS + APPLICATIONS + NUMBER
	const { user } = useContext(UserContext)
	return (
		<>
		<Stack mt='xl'>
			<Title order={4}>Claims Pending Approval</Title>
			<ClaimsTable limit={5}/>
		</Stack>
		<Stack mt='xl'>
			<Title order={4}>Recent Policy Applications</Title>
			<PoliciesTakenGrid policiesTaken={user?.policiesTaken || []}/>
		</Stack>
		</>
	)
}