import { MediaQuery, Navbar } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import Logo from "../misc/Logo";


function AppNavbarTop() {
	const navigate = useNavigate()
	return (
		<MediaQuery smallerThan='sm' styles={{display: 'none'}}>
			<Navbar.Section onClick={() => navigate('/')} style={{ cursor: 'pointer', borderBottom: '1px solid #eee' }} px='lg' py='lg'>
				<Logo height={30}/>
			</Navbar.Section>
		</MediaQuery>
	)
}

export default AppNavbarTop;