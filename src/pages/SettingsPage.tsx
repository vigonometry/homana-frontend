import { useLazyQuery, useMutation } from "@apollo/client"
import { ActionIcon, Box, Button, Group, Stack, TextInput, Title } from "@mantine/core"
import { useForm } from "@mantine/hooks"
import { ChangeEvent, ReactHTMLElement, useContext, useEffect, useState } from "react"
import { Minus, Plus } from "tabler-icons-react"
import { AUTH_TOKEN } from "../constants/authToken"
import { READ_DEPENDANTS, UPDATE_DEPENDANTS } from "../queries/dependants"
import { UserContext } from "../services/userContextProvider"

function SettingsPage() {
	const { user, setUser } = useContext(UserContext)
	const logout = () => {
		window.localStorage.removeItem(AUTH_TOKEN)
		setUser(null)
		window.location.reload()
	}
	const [deps, setDeps] = useState<string[]>(user?.dependants || [])
	const [getDependants] = useLazyQuery(READ_DEPENDANTS, {
		onCompleted: ({ currentUser }) => {
			setUser({...user, ...currentUser})
			setDeps(currentUser.dependants)
		}
	})
	console.log(deps)
	useEffect(() => {
		if (user?.__typename === 'Client' && !user.dependants) {
			getDependants()
		}
	}, [user])
	const handleNewClick = () => {
		if (deps.length === 0 || deps[deps.length - 1].replace(/\s+/g, ' ').trim() !== '') {
			setDeps([...deps, ''])
		}
	}
	const depRemove = (i: number) => () => {
		setDeps(deps.filter((d, j) => i !== j))
	}
	const depEdit = (i: number) => (e: ChangeEvent<HTMLInputElement>) => {
		setDeps(deps.map((d, j) => i === j ? e.target.value : d))
	}
	const [updateDependants] = useMutation(UPDATE_DEPENDANTS, {
		variables: {
			dependants: deps
		},
		onCompleted: ({ updateDependants }) => {
			if (user && updateDependants.response) setUser({...user, dependants: deps})
			else {
				console.log(updateDependants.error)
			}
		}
	})
	return (
		<Box p='xl'>
			<Stack spacing={36}>
				<Title order={2}>Settings</Title>
				{ user?.__typename === 'Client' && (
					<Stack>
						<Group>
							<Title order={4}>Add Dependants</Title>
							<ActionIcon onClick={handleNewClick} size='sm' variant="filled"><Plus/></ActionIcon>
						</Group>
						<Stack spacing={8}>
							{
								deps.map((d, i) => (
									<Group key={i}>
										<TextInput size="md" onChange={depEdit(i)} value={d}/>
										<ActionIcon onClick={depRemove(i)} color='red'><Minus/></ActionIcon>
									</Group>
								))
							}
						</Stack>
						<Group>
							<Button onClick={() => updateDependants()}>Save</Button>
						</Group>
					</Stack>
				)}
				<Stack>
					<Title order={4}>Log Out</Title>
					<Group>
						<Button onClick={logout} color='red' variant="light">Log Out</Button>
					</Group>
				</Stack>
			</Stack>
		</Box>
	)
}

export default SettingsPage