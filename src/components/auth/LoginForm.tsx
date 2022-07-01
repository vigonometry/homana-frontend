import { useMutation } from "@apollo/client"
import { Button, PasswordInput, Select, Space, Stack, TextInput } from "@mantine/core"
import { useForm } from "@mantine/hooks"
import { AUTH_TOKEN } from "../../constants/authToken"
import { USER_TYPES } from "../../constants/userTypes"
import { LOGIN, REGISTER } from "../../queries/auth"

interface LoginFormProps {
	isLogin: boolean
}

function LoginForm(props: LoginFormProps) {
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
		props.isLogin ? login() : createAccount()
	}

	return (
		<Stack px='sm' py='md'>
			{!props.isLogin && <TextInput label='Name' placeholder="Your Name" size="sm" {...form.getInputProps('name')}/>}
			<TextInput label='Email' placeholder="your.email@mail.com" size="sm" {...form.getInputProps('email')}/>
			<PasswordInput label='Password' placeholder="Your Password" size="sm" {...form.getInputProps('password')}/>
			{!props.isLogin && <Select label="Register as" data={USER_TYPES} {...form.getInputProps('type')}/>}
			<Space/>
			<Button onClick={handleSubmitClick}>{props.isLogin ? 'Log In' : 'Create Account'}</Button>
		</Stack>
	)
}

export default LoginForm