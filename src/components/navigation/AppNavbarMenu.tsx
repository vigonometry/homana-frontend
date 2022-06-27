import { Navbar, Stack } from "@mantine/core";
import { useContext } from "react";
import navbarMenuItems from "../../constants/navbarMenuItems";
import { UserContext } from "../../services/userContextProvider";
import AppNavbarMenuItem from "./AppNavbarMenuItem";

function AppNavbarMenu() {
	const { user } = useContext(UserContext)
	return (
		<Navbar.Section>
			<Stack spacing={0}>
				{navbarMenuItems.map(m => m.title === 'Policies' && user?.__typename === 'Agent'? ({...m, title: 'Quotations', link: '/quotations'}) : m).map(item => <AppNavbarMenuItem key={item.link} item={item}/>)}
			</Stack>
		</Navbar.Section>
	)
}

export default AppNavbarMenu;