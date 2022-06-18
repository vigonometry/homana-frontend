import { AppShell, AppShellProps } from "@mantine/core"
import React, { useState } from 'react'
import AppHeader from "./AppHeader"
import AppNavbar from "./AppNavbar"

function AppContainer({children} : {children: React.ReactNode}) {
	const [opened, setOpened] = useState<boolean>(false)
	const toggleMenu = () => setOpened(!opened)
	const shellProps: AppShellProps = {
		header: <AppHeader toggleMenu={toggleMenu}/>,
		navbar: <AppNavbar opened={opened}/>,
		navbarOffsetBreakpoint: 'sm',
		children: children
	}
	return (
		<AppShell {...shellProps}/>
	)
}

export default AppContainer