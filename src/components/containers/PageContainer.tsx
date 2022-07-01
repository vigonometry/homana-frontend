import { Box, Stack } from "@mantine/core";
import { ReactNode } from "react";

interface PageContainerProps {
	children: ReactNode
}

export default function PageContainer(props: PageContainerProps) {
	return (
		<Box p='xl'>
			<Stack>
				{ props.children }
			</Stack>
		</Box>
	)
}