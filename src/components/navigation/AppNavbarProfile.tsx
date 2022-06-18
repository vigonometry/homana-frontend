import { Avatar, Group, Navbar, Stack, Text } from "@mantine/core"

function AppNavbarProfile() {
	return (
		<Navbar.Section style={{ borderBottom: '1px solid #eee' }} px='lg' py='lg' className="fade-on-hover">
			<Group>
				<Avatar color='blue' size='md'>SA</Avatar>
				<Stack spacing={0}>
					<Text size='md'>Shashank Acharya</Text>
					<Text size='sm' style={{ opacity: 0.5 }}>acharya.s@icloud.com</Text>
				</Stack>
			</Group>
		</Navbar.Section>
	)
}

export default AppNavbarProfile