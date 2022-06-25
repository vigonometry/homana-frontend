import { AppShell, AppShellProps } from "@mantine/core"
import { ReactNode, useState } from 'react'
import AppHeader from "./AppHeader"
import AppNavbar from "./AppNavbar"

interface AppContainerProps {
	children: ReactNode
}

function AppContainer(props: AppContainerProps) {
	const [opened, setOpened] = useState<boolean>(false)
	const toggleMenu = () => setOpened(!opened)
	const shellProps: AppShellProps = {
		header: <AppHeader toggleMenu={toggleMenu}/>,
		navbar: <AppNavbar opened={opened}/>,
		navbarOffsetBreakpoint: 'sm',
		children: props.children
	}
	return (
		<AppShell {...shellProps}/>
	)
}

export default AppContainer