import { Anchor, Badge, Group, Table, Text } from "@mantine/core";
import { Paperclip } from "tabler-icons-react";
import { Claim } from "../../types/claim";

interface ClaimsTableProps {
	claims: Claim[]
}

export default function ClaimsTable(props: ClaimsTableProps) {
	return (
		<>
			<Table verticalSpacing='xs' fontSize='md'>
				<thead>
					<tr>
						<th>Date</th>
						<th>Claim ID</th>
						<th>Status</th>
						<th>Attachments</th>
					</tr>
				</thead>
				<tbody>
					{
						props.claims.map(t => ({...t, date: new Date(t.claimDate)})).map(t => (
							<tr key={t._id} className="fade-on-hover">
								<td>{t.date.getDate()}-{t.date.getMonth()}-{t.date.getFullYear()}</td>
								<td>{t._id}</td>
								<td><Badge color={t.status === 'Submitted' ? 'grape' : t.status === 'Completed' ? 'green' : 'red'}>{t.status}</Badge></td>
								<td>
									<Group>
										{t.attachments.map(a => <Anchor key={a}><Group spacing={4}><Paperclip size={16}/><Text>{a}</Text></Group></Anchor>)}
									</Group>
								</td>
							</tr>
						))
					}
				</tbody>
			</Table>
		</>
	)
}