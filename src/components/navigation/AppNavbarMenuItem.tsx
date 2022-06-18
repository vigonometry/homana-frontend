import { Avatar, Group, Text } from "@mantine/core"
import { useNavigate } from "react-router-dom"
import { MenuItem } from "../../types/navigation"

interface AppNavbarMenuItemProps {
	item: MenuItem
}

function AppNavbarMenuItem(props: AppNavbarMenuItemProps) {
	const nav = useNavigate()
	return (
		<Group px='lg' py='sm' className="fade-on-hover" onClick={() => nav(props.item.link)}>
			<Avatar color={props.item.color}>{props.item.icon}</Avatar>
			<Text size="md" color='gray'>{props.item.title}</Text>
		</Group>
	)
}

export default AppNavbarMenuItem