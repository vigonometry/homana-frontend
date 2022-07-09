import { Group, Stack, Title } from "@mantine/core"
import { useContext } from "react"
import ClaimsTable from "../components/claims/ClaimsTable"
import PageContainer from "../components/containers/PageContainer"
import PoliciesTakenGrid from "../components/policies/PoliciesTakenGrid"
import { UserContext } from "../services/userContextProvider"

export default function DashboardPage() {
	return (
		<PageContainer>
			<Group position="apart">
				<Title order={2}>Dashboard</Title>
			</Group>
			<CustomerDashboard/>
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
	return (
		<></>
	)
}

function BrokerDashboard() {
	// CLAIMS + APPLICATIONS + NUMBER
	return (
		<></>
	)
}