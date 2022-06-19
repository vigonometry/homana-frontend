import { MediaQuery, Navbar } from "@mantine/core";
import Logo from "../misc/Logo";


function AppNavbarTop() {
	return (
		<MediaQuery smallerThan='sm' styles={{display: 'none'}}>
			<Navbar.Section style={{ borderBottom: '1px solid #eee' }} px='lg' py='lg'>
				<Logo height={30}/>
			</Navbar.Section>
		</MediaQuery>
	)
}

export default AppNavbarTop;