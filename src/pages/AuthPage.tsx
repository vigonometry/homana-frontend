import { Center, Space, Stack } from "@mantine/core";
import LoginCard from "../components/auth/LoginCard";
import Logo from "../components/misc/Logo";

const AUTH_LOGO_HEIGHT = 40
const AUTH_CARD_WIDTH = 450

export default function AuthPage() {
	return (
		<Center style={{ height: '100vh' }}>
			<Stack style={{ width: AUTH_CARD_WIDTH, maxWidth: '90%'}}>
				<Center>
					<Logo height={AUTH_LOGO_HEIGHT}/>
				</Center>
				<Space/>
				<LoginCard/>
			</Stack>
		</Center>
	)
}