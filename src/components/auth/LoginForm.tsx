import { useMutation } from "@apollo/client"
import { Anchor, Button, Card, PasswordInput, Select, Space, Stack, Text, TextInput, Title } from "@mantine/core"
import { useForm } from "@mantine/hooks"
import { useState } from "react"
import { AUTH_TOKEN } from "../../constants/authToken"
import { USER_TYPES } from "../../constants/userTypes"
import { LOGIN, REGISTER } from "../../queries/auth"

function LoginForm() {

	const [isLogin, setIsLogin] = useState(true)
	const form = useForm({ 
		initialValues: {
			name: '',
			email: '',
			password: '',
			type: USER_TYPES[0]
		}
	})

	const [login] = useMutation(LOGIN, {
		variables: form.values,
		onCompleted: ({ login }) => {
			if (login.response) {
				localStorage.setItem(AUTH_TOKEN, login.response)
				window.location.reload()
			}
		}
	})

	const [createAccount] = useMutation(REGISTER, {
		variables: form.values,
		onCompleted: ({ register }) => {
			if (register.response) {
				localStorage.setItem(AUTH_TOKEN, register.response)
				window.location.reload()
			}
		}
	})

	const handleSubmitClick = () => {

		isLogin ? login() : createAccount()
	}

	return (
		<>
			<Stack spacing='xs'>
				<Title align="center">Welcome{isLogin && ' back'}!</Title>
				{isLogin && <Text color='dimmed' align="center">Don't have an account yet? <Anchor onClick={() => setIsLogin(false)}>Create Account</Anchor></Text>}
				{!isLogin && <Text color='dimmed' align="center">Already have an account? <Anchor onClick={() => setIsLogin(true)}>Log In</Anchor></Text>}
			</Stack>
			<Space/>
			<Card withBorder p='xl' shadow='lg'>
				<Stack px='sm' py='md'>
					{!isLogin && <TextInput label='Name' placeholder="Your Name" size="sm" {...form.getInputProps('name')}/>}
					<TextInput label='Email' placeholder="your.email@mail.com" size="sm" {...form.getInputProps('email')}/>
					<PasswordInput label='Password' placeholder="Your Password" size="sm" {...form.getInputProps('password')}/>
					{!isLogin && <Select label="Register as" data={USER_TYPES} {...form.getInputProps('type')}/>}
					<Space/>
					<Button onClick={handleSubmitClick}>{isLogin ? 'Log In' : 'Create Account'}</Button>
				</Stack>
			</Card>
		</>
	)
}

export default LoginForm