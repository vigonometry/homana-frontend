import { MantineColor } from "@mantine/core";

export default function ptBadgeColor(status: string): MantineColor {
	switch (status) {
		case 'QUOTED': return 'blue'
		case 'APPLIED': return 'yellow'
		case 'SUBMITTED': return 'blue'
		case 'PROCESSING': return 'yellow'
		case 'APPROVED': return 'green'
		case 'REJECTED': return 'red'
		default: return 'gray'
	}
}