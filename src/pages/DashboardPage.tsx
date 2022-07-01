import { Group, Title } from "@mantine/core"
import PageContainer from "../components/containers/PageContainer"

export default function DashboardPage() {
	return (
		<PageContainer>
			<Group position="apart">
				<Title order={2}>Dashboard</Title>
			</Group>
		</PageContainer>
	)
}