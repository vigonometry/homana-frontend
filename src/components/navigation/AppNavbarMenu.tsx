import { Navbar, Stack } from "@mantine/core";
import navbarMenuItems from "../../constants/navbarMenuItems";
import AppNavbarMenuItem from "./AppNavbarMenuItem";

function AppNavbarMenu() {
	return (
		<Navbar.Section>
			<Stack spacing={0}>
				{navbarMenuItems.map(item => <AppNavbarMenuItem key={item.link} item={item}/>)}
			</Stack>
		</Navbar.Section>
	)
}

export default AppNavbarMenu;