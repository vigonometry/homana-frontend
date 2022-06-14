import { Avatar, Group, Text, UnstyledButton } from "@mantine/core";
import './AppNavbarButton.css'

export default function AppNavbarButton({title, icon, color}) {
	return (
		<UnstyledButton p='xs' className="app-navbar-button">
			<Group>
				<Avatar color={color} radius='sm'>
					{icon}
				</Avatar>
				<Text>{title}</Text>
			</Group>
		</UnstyledButton>
	)
}