import { MantineColor } from "@mantine/core"
import { ReactNode } from "react"

export interface MenuItem {
	title: string
	link: string
	icon: ReactNode
	color: MantineColor
}