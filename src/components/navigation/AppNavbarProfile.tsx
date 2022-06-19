import { Avatar, Group, Navbar, Stack, Text } from "@mantine/core"
import { User } from "../../types/user"

interface AppNavbarProfileProps {
	user: User
}

function AppNavbarProfile(props: AppNavbarProfileProps) {
	return (
		<Navbar.Section style={{ borderBottom: '1px solid #eee' }} px='lg' py='lg' className="fade-on-hover">
			<Group>
				<Avatar color='blue' size='md'>{props.user.name?.charAt(0) || 'HI'}</Avatar>
				<Stack spacing={0}>
					<Text size='md'>{props.user.name}</Text>
					<Text size='sm' style={{ opacity: 0.5 }}>{props.user.email}</Text>
				</Stack>
			</Group>
		</Navbar.Section>
	)
}

export default AppNavbarProfile