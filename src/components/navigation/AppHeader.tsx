import { ActionIcon, Group, Header, MediaQuery } from "@mantine/core"
import { Menu2 } from "tabler-icons-react"
import Logo from "../misc/Logo"
interface AppHeaderProps {
	toggleMenu: () => void
}

function AppHeader(props: AppHeaderProps) {
	return (
		<MediaQuery largerThan="sm" styles={{display: 'none'}}>
			<Header height={78} px='sm' py='lg'>
				<Group position="apart">
					<Logo height={30}/>
					<ActionIcon onClick={props.toggleMenu}>
						<Menu2/>
					</ActionIcon>
				</Group>
			</Header>
		</MediaQuery>
	)
}

export default AppHeader