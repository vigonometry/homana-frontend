import { useLazyQuery, useQuery } from "@apollo/client";
import { Anchor, Badge, Button, Group, Table, Text, TextInput } from "@mantine/core";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { READ_CLAIMS } from "../../queries/claims";
import { GET_CURRENT_POLICIES_TAKEN } from "../../queries/policyTaken";
import { UserContext } from "../../services/userContextProvider";
import { Callbacks } from "../../types/callbacks";
import { Claim } from "../../types/claim";
import ptBadgeColor from "../../utils/ptBadgeColor";
import ClaimModal from "./ClaimModal";
import NewClaimModal from "./NewClaimModal";

interface ClaimsTableProps {
}

export default function ClaimsTable(props: ClaimsTableProps) {
	const { user, setUser } = useContext(UserContext)
	const { data } = useQuery(READ_CLAIMS)
	const [newIsOpened, setNewIsOpened] = useState(false)
	const [selected, setSelected] = useState<Claim | null>(null)
	const [getCurrentPolicies] = useLazyQuery(GET_CURRENT_POLICIES_TAKEN, {
		onCompleted: ({ currentUser }) => {
			setUser({...user, ...currentUser})
		},
		fetchPolicy: 'no-cache'
	})
	useEffect(() => {
		if (user && !user.policiesTaken) getCurrentPolicies()
	}, [user, getCurrentPolicies])
	const close = () => {
		setNewIsOpened(false)
		setSelected(null)
	}
	const newClicked = () => {
		setNewIsOpened(true)
	}
	useEffect(() => {
		if (data && data.currentUser && user) setUser({...user, ...data.currentUser})
	}, [data])
	if (!user || !user.claims) return <></>
	const callbacks: Callbacks<Claim> = {
		create: (c) => setUser({...user, claims: user.claims ? [...user.claims, c] : [c]}),
		update: (c) => setUser({ ...user, claims: user.claims ? user.claims.map(x => x._id === c._id ? c : x) : []}),
		delete: (c) => {}
	}
	return (
		<>
		<NewClaimModal callbacks={callbacks} isOpened={newIsOpened} close={close}/>
		<ClaimModal callbacks={callbacks} claim={selected} close={close}/>
		<Group>
			<TextInput placeholder="Search"/>
			{ user?.__typename === 'Client' && <Button onClick={newClicked}>New Claim</Button>}
		</Group>
		<Table verticalSpacing='sm'>
			<thead>
				<tr>
					<th>Last Updated</th>
					<th>Claim ID</th>
					{ user.__typename !== 'Client' && <th>Client Name</th>}
					<th>Attachments</th>
					<th>Status</th>
				</tr>
			</thead>
			<tbody>
				{
					user.claims.map(c => (
						<tr className="fade-on-hover" onClick={() => setSelected(c)}>
							<td>{ moment(c.claimDate).format("DD/MM/YYYY, hh:mm A") }</td>
							<td>{ c._id }</td>
							{ user.__typename !== 'Client' && <td>{c.client?.name || ''}</td>}
							<td>
								<Group>
								{c.attachments.map(a => (
									<Anchor>{a}</Anchor>
								))}
								{c.attachments.length === 0 && <Text color='dimmed'>None</Text>}
								</Group>
							</td>
							<td>
								<Badge color={ptBadgeColor(c.status || '')}>{c.status}</Badge>
							</td>
						</tr>
					))
				}
			</tbody>
		</Table>
		</>
	)
}