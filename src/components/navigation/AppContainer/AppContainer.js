import { AppShell } from "@mantine/core";
import { useState } from "react";
import AppHeader from "../AppHeader/AppHeader";
import AppNavbar from "../AppNavbar/AppNavbar";

export default function AppContainer({children}) {
	const [opened, setOpened] = useState(false);
	return (
		<AppShell
			padding='xl' 
			navbar={<AppNavbar hidden={!opened}/>} 
			header={<AppHeader setOpened={setOpened}/>}
			navbarOffsetBreakpoint='sm'
		>
			{children}
		</AppShell>
	)
}