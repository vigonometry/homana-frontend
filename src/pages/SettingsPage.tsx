import { Box, Button, Group, Stack, Title } from "@mantine/core"
import { useContext } from "react"
import { AUTH_TOKEN } from "../constants/authToken"
import { UserContext } from "../services/userContextProvider"

function SettingsPage() {
	const { setUser } = useContext(UserContext)
	const logout = () => {
		window.localStorage.removeItem(AUTH_TOKEN)
		setUser(null)
		window.location.reload()
	}
	return (
		<Box p='xl'>
			<Stack>
				<Title order={2}>Settings</Title>
				<Group>
					<Button onClick={logout} color='red' variant="light">Log Out</Button>
				</Group>
			</Stack>
		</Box>
	)
}

export default SettingsPage