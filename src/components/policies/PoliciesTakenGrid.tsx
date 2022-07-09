import { Badge, Group, SegmentedControl, SimpleGrid, Stack, Table, TextInput } from "@mantine/core";
import moment from "moment";
import { useContext, useState } from "react";
import { UserContext } from "../../services/userContextProvider";
import { Callbacks } from "../../types/callbacks";
import { PolicyTaken } from "../../types/policy";
import ptBadgeColor from "../../utils/ptBadgeColor";
import PolicyTakenCard from "./PolicyTakenCard";
import PolicyTakenModal from "./PolicyTakenModal";

interface PoliciesTakenGridProps {
	policiesTaken: PolicyTaken[]
	withControls?: boolean
}

const CLIENT_MODES = ['Current', 'Inbox', 'Others']
const BROKER_MODES = ['Current', 'Old']

function PoliciesTakenGrid(props: PoliciesTakenGridProps) {
	const { user, setUser } = useContext(UserContext)
	const [mode, setMode] = useState(CLIENT_MODES[0])
	const [current, setCurrent] = useState<PolicyTaken | null>(null)
	const close = () => setCurrent(null)
	const handleClick = (p: PolicyTaken) => () => setCurrent(p)
	if (!user) return <></>
	const callbacks: Callbacks<PolicyTaken> = {
		create: (x) => {},
		update: (x) => setUser({...user, policiesTaken: user.policiesTaken.map(p => p._id === x._id ? x : p)}),
		delete: (x) => {}
	}
	return (
		<Stack spacing='xl'>
			<PolicyTakenModal callbacks={callbacks} policyTaken={current} close={close}/>
			{ props.withControls &&
				<Group>
					<TextInput placeholder="Search" size="md"/>
					<SegmentedControl value={mode} onChange={setMode} data={user.__typename === 'Broker' ? BROKER_MODES : CLIENT_MODES}/>
				</Group>
			}
			{ user.__typename === 'Client' && <SimpleGrid breakpoints={[{ minWidth: 'sm', cols: 1}, { minWidth: 'md', cols: 2}, { minWidth: 'lg', cols: 3}]}>
				{props.policiesTaken.filter(p => mode === 'Current' ? p.status === 'APPROVED' : mode === 'Others' ? p.status !== 'QUOTED' && p.status !== 'APPROVED' : p.status === 'QUOTED').map(p => (
					p.policy && <PolicyTakenCard policyTaken={p} onClick={handleClick(p)}/>
				))}
			</SimpleGrid>}
			{ user.__typename === 'Broker' && <Table verticalSpacing='xs'>
				<thead>
					<tr>
						<th>Date</th>
						<th>Policy</th>
						<th>Recepient</th>
						<th>Insured Amount</th>
						<th>Premium</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{props.policiesTaken.filter(p => mode === 'Current' ? p.status === 'APPLIED' : p.status !== 'APPLIED' ).map(p => (
						p.policy && <tr className="fade-on-hover" onClick={handleClick(p)}>
							<td>{moment(p.date).format("DD-MM-YYYY, hh:mm A")}</td>
							<td>{p.policy.title}</td>
							<td>{p.client?.name}</td>
							<td>S$ {p.insuredAmount}</td>
							<td>S$ {p.premium}</td>
							<td>
								<Badge color={ptBadgeColor(p.status)}>{p.status}</Badge>
							</td>
						</tr>
					))}
				</tbody>
			</Table>}
		</Stack>
	)
}

export default PoliciesTakenGrid;