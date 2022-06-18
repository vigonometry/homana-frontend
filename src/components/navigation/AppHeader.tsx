import { ActionIcon, Group, Header, Image, MediaQuery, Text, Title } from "@mantine/core"
import { Menu2 } from "tabler-icons-react"
import logo from '../../assets/images/logo-plain.svg'
interface AppHeaderProps {
	toggleMenu: () => void
}

function AppHeader(props: AppHeaderProps) {
	return (
		<MediaQuery largerThan="sm" styles={{display: 'none'}}>
			<Header height={85} px='sm' py='lg'>
				<Group position="apart">
					<Group spacing='sm'>
						<Image src={logo} height={40} width={40} fit="contain"/>
						<Text size="xl">HOMANA</Text>
					</Group>
					<ActionIcon onClick={props.toggleMenu}>
						<Menu2/>
					</ActionIcon>
				</Group>
			</Header>
		</MediaQuery>
	)
}

export default AppHeader