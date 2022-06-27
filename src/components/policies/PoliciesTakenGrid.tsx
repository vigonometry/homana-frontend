import { Group, SegmentedControl, SimpleGrid, Stack, TextInput } from "@mantine/core";
import { useState } from "react";
import { PolicyTaken } from "../../types/policy";
import PolicyTakenCard from "./PolicyTakenCard";
import PolicyTakenModal from "./PolicyTakenModal";

interface PoliciesTakenGridProps {
	policiesTaken: PolicyTaken[]
}

const MODES = ['Current', 'Inbox', 'Others']

function PoliciesTakenGrid(props: PoliciesTakenGridProps) {
	const [mode, setMode] = useState(MODES[0])
	const [current, setCurrent] = useState<PolicyTaken | null>(null)
	const close = () => setCurrent(null)
	const handleClick = (p: PolicyTaken) => () => setCurrent(p)
	return (
		<Stack spacing='xl'>
			<PolicyTakenModal policyTaken={current} close={close}/>
			<Group>
				<TextInput placeholder="Search" size="md"/>
				<SegmentedControl value={mode} onChange={setMode} data={MODES}/>
			</Group>
			<SimpleGrid breakpoints={[{ minWidth: 'sm', cols: 1}, { minWidth: 'md', cols: 2}, { minWidth: 'lg', cols: 3}]}>
				{props.policiesTaken.filter(p => mode === 'Current' ? p.status === 'APPROVED' : mode === 'Others' ? p.status !== 'QUOTED' && p.status !== 'APPROVED' : p.status === 'QUOTED').map(p => (
					p.policy && <PolicyTakenCard policyTaken={p} onClick={handleClick(p)}/>
				))}
			</SimpleGrid>
		</Stack>
	)
}

export default PoliciesTakenGrid;