import { Navbar } from "@mantine/core"
import AppNavbarMenu from "./AppNavbarMenu"
import AppNavbarProfile from "./AppNavbarProfile"
import AppNavbarTop from "./AppNavbarTop"

interface AppNavbarProps {
	opened: boolean
}

function AppNavbar(props: AppNavbarProps) {
	return (
		<Navbar hiddenBreakpoint='sm' hidden={!props.opened} width={{ base: 260 }} height='100vh' sx={{ backgroundColor: 'rgba(0,0,0,0.0125)'}}>
			<AppNavbarTop/>
			<AppNavbarProfile/>
			<AppNavbarMenu/>
		</Navbar>
	)
}

export default AppNavbar