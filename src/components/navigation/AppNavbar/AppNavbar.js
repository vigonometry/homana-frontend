import { Avatar, Box, Group, MediaQuery, Navbar, Stack, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Dashboard } from "tabler-icons-react";
import AppNavbarButton from "../AppNavbarButton/AppNavbarButton";

export default function AppNavbar({hidden}) {
	return (
		<Navbar hiddenBreakpoint='sm' hidden={hidden} width={{base: 280}}>
			<MediaQuery smallerThan='sm' styles={{display:'none'}}>
				<Navbar.Section p='lg' style={{borderBottom: `1px solid #efefef`}}>
					<Title order={2}>Logo</Title>
				</Navbar.Section>
			</MediaQuery>
			<Navbar.Section p='lg' style={{borderBottom: `1px solid #efefef`}}>
				<Group>
					<Avatar size={40}>A</Avatar>
					<div>
						<Text>Admin</Text>
						<Text size='xs' color='gray'>90511444</Text>
					</div>
				</Group>
			</Navbar.Section>
			<Navbar.Section p='xs' grow>
				<Stack spacing={0}>
					<AppNavbarButton title="Dashboard" icon={<Dashboard/>} color='orange'/>
					<AppNavbarButton title="Profile" icon={<Dashboard/>} color='pink'/>
					<AppNavbarButton title="Other" icon={<Dashboard/>} color='green'/>
				</Stack>
			</Navbar.Section>
			
		</Navbar>
	)
}