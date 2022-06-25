import { Avatar, Group, Navbar, Stack, Text } from "@mantine/core"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../services/userContextProvider"

function AppNavbarProfile() {
	const { user } = useContext(UserContext)
	const navigate = useNavigate()	
	return (
		<Navbar.Section style={{ borderBottom: '1px solid #eee' }} onClick={() => navigate('/settings')} px='lg' py='lg' className="fade-on-hover">
			<Group>
				<Avatar color='blue' size='md'>{user?.name?.charAt(0) || 'HI'}</Avatar>
				<Stack spacing={0}>
					<Text size='md'>{user?.name}</Text>
					<Text size='sm' style={{ opacity: 0.5 }}>{user?.email}</Text>
				</Stack>
			</Group>
		</Navbar.Section>
	)
}

export default AppNavbarProfile