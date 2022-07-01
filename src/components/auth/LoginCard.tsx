import { Anchor, Card, Space, Stack, Text, Title } from "@mantine/core"
import { useState } from "react"
import LoginForm from "./LoginForm"

export default function LoginCard() {
	const [isLogin, setIsLogin] = useState(true)
	const toggleLogin = () => setIsLogin(!isLogin)
	return (
		<>
			<Stack spacing='xs'>
				<Title align="center">Welcome{isLogin && ' back'}!</Title>
				<Text color='dimmed' align="center">
					{ isLogin ? "Don't have an account already? " : "Already have an account? " }
					<Anchor onClick={toggleLogin}>{ isLogin ? "Create Account" : "Log In" }</Anchor>
				</Text>
			</Stack>
			<Space/>
			<Card withBorder p='xl' shadow='lg'>
				<LoginForm isLogin={isLogin}/>
			</Card>
		</>
	)
}