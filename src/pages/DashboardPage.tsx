import { Box, Group, NumberInput, Space, Stack, Table, Text, TextInput, Title } from "@mantine/core"
import { DatePicker } from "@mantine/dates"
import ClaimsTable from "../components/claims/ClaimsTable"
import PoliciesGrid from "../components/policies/PoliciesGrid"
import { SAMPLE_CLAIMS, SAMPLE_POLICIES } from "../constants/sample"
import { User } from "../types/user"
import userComponentSelector from "../utils/userComponentSelector"

interface DashboardPageProps {
	user: User
}

function DashboardPage(props: DashboardPageProps) {
	return userComponentSelector(
		props.user, 
		<CustomerDashboard {...props}/>,
		<></>,
		<></>
	)
}

function CustomerDashboard(props: DashboardPageProps) {
	return (
		<Box p='xl'>
			<Stack spacing={60}>
				<Stack spacing={4}>
					<Text size="xl">Welcome back,</Text>
					<Title order={2}>Shashank Acharya</Title>
				</Stack>
				<Stack>
					<Title order={3}>Your Notifications</Title>
					<Group>
						<Table>
							<tbody>
								<tr className="fade-on-hover">
									<td>26-6-2022</td>
									<td>LifeShield Pro - Policy Quotation</td>
								</tr>
								<tr className="fade-on-hover">
									<td>24-6-2022</td>
									<td>Claim Approved - ABGOP1MX</td>
								</tr>
								<tr className="fade-on-hover">
									<td>17-6-2022</td>
									<td>Claim Approved - BHJK19ZX</td>
								</tr>
							</tbody>
						</Table>
					</Group>
				</Stack>
				<Stack>
					<Title order={3}>Your Recent Claims</Title>
					<ClaimsTable claims={SAMPLE_CLAIMS.slice(0, 4)}/>
				</Stack>
				<Stack>
					<Title order={3}>Your Pinned Policies</Title>
					<PoliciesGrid mini policies={SAMPLE_POLICIES.slice(0, 2)}/>
				</Stack>
			</Stack>
		</Box>
	)
}

export default DashboardPage