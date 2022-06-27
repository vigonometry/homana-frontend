import { Badge, Button, Group, Table, TextInput } from "@mantine/core"
import { useForm } from "@mantine/hooks"
import moment from "moment"
import { useContext, useState } from "react"
import { UserContext } from "../../services/userContextProvider"
import { Callbacks } from "../../types/callbacks"
import { PolicyTaken } from "../../types/policy"
import ptBadgeColor from "../../utils/ptBadgeColor"
import QuotationModal from "./QuotationModal"

interface QuotationsTableProps {
	quotations: PolicyTaken[]
	refresh: () => void
}

const newQuotation: PolicyTaken = {
	_id: null,
	policyId: '',
	clientId: '',
	insuredAmount: 0,
	premium: 0,
	date: '',
	status: 'QUOTED'
}

function QuotationsTable(props: QuotationsTableProps) {
	const { user } = useContext(UserContext)
	const [current, setCurrent] = useState<PolicyTaken | null>(null)
	const form = useForm<PolicyTaken>({ initialValues: newQuotation})
	const close = () => {
		setCurrent(null)
		form.setValues(newQuotation)
	}

	if (!user) return <></>

	const callbacks: Callbacks<PolicyTaken> = {
		create: (x) => props.refresh(),
		update: (x) => {},
		delete: (x) => {} 
	}

	return (
		<>
			<QuotationModal callbacks={callbacks} form={form} quotation={current} close={close}/>
			<Group>
				<TextInput placeholder="Search"/>
				<Button onClick={() => setCurrent(newQuotation)}>New Quotation</Button>
			</Group>
			<Table verticalSpacing='xs' fontSize='md'>
				<thead>
					<tr>
						<th>Date</th>
						<th>Recepient</th>
						<th>Policy</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{ props.quotations.map(q => (
						<tr key={q.date}>
							<td>{moment(q.date).format('DD-MM-YYYY, hh:mm A')}</td>
							<td>{q.client?.name}</td>
							<td>{q.policy?.title}</td>
							<td>
								<Badge color={ptBadgeColor(q.status)}>{q.status}</Badge>
							</td>
						</tr>
					)) }
				</tbody>
			</Table>
		</>
	)
}

export default QuotationsTable