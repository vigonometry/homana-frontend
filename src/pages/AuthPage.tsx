import { Center, Space, Stack } from "@mantine/core";
import LoginForm from "../components/auth/LoginForm";
import Logo from "../components/misc/Logo";

function AuthPage() {
	return (
		<Center style={{ height: '100vh' }}>
			<Stack style={{ width: 450, maxWidth: '90%'}}>
				<Center>
					<Logo height={40}/>
				</Center>
				<Space/>
				<LoginForm/>
			</Stack>
		</Center>
	)
}

export default AuthPage;