import { Table } from "@mantine/core";

interface ClaimsTableProps {

}

export default function ClaimsTable(props: ClaimsTableProps) {
	return (
		<>
			<Table>
				<thead>
					<tr>
						<th>Date</th>
						<th>Claim ID</th>
						<th>Status</th>
						<th>Attachments</th>
					</tr>
				</thead>
			</Table>
		</>
	)
}