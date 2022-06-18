import { MenuItem } from "../types/navigation";
import { Cash, Dashboard, FileCertificate } from "tabler-icons-react";

const navbarMenuItems: MenuItem[] = [
	{
		title: "Dashboard",
		link: "/",
		color: 'green',
		icon: <Dashboard/>
	},
	{
		title: "Policies",
		link: "/policies",
		color: 'grape',
		icon: <FileCertificate/>
	},
	{
		title: "Claims",
		link: "/claims",
		color: 'pink',
		icon: <Cash/>
	}
]

export default navbarMenuItems