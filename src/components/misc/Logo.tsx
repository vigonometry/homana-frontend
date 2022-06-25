import { Group, Image, Text } from "@mantine/core";
import logo from '../../assets/images/logo-plain.svg'

interface LogoProps {
	height: number
}

function Logo(props: LogoProps) {
	return (
		<Group spacing='sm'>
			<Image src={logo} height={props.height} width={props.height} fit="contain"/>
			<Text style={{fontSize: props.height * 0.8}}>InsuraSec</Text>
		</Group>
	)
}

export default Logo;