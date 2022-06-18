import { Group, Image, MediaQuery, Navbar, Text, Title } from "@mantine/core";
import logo from '../../assets/images/logo-plain.svg'

function AppNavbarTop() {
	return (
		<MediaQuery smallerThan='sm' styles={{display: 'none'}}>
			<Navbar.Section style={{ borderBottom: '1px solid #eee' }} px='lg' py='lg'>
				<Group spacing='sm'>
					<Image src={logo} height={30} width={30} fit="contain"/>
					<Text size="xl">HOMANA</Text>
				</Group>
			</Navbar.Section>
		</MediaQuery>
	)
}

export default AppNavbarTop;