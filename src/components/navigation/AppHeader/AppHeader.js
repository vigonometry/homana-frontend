import { ActionIcon, Burger, Group, Header, MediaQuery, Text, Title } from "@mantine/core";

export default function AppHeader({setOpened}) {
	return (
		<MediaQuery largerThan='sm' styles={{display:'none'}}>
			<Header height={72} p='md'>
				<Group position="apart">
					<Title order={2}>Logo</Title>
					<ActionIcon onClick={() => setOpened(opened => !opened)}>
						<Burger/>
					</ActionIcon>
				</Group>
			</Header>
		</MediaQuery>
	)
}