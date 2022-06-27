import { useQuery } from "@apollo/client";
import { Modal, Select } from "@mantine/core";
import { UseForm } from "@mantine/hooks/lib/use-form/use-form";
import { useEffect, useState } from "react";
import { READ_POLICIES } from "../../queries/policy";
import { Policy, PolicyTaken } from "../../types/policy";

interface QuotationModalProps {
	quotation: PolicyTaken | null
	close: () => void
	form: UseForm<PolicyTaken>
}

function QuotationModal(props: QuotationModalProps) {
	const [policies, setPolicies] = useState<Policy[]>([])
	const { data } = useQuery(READ_POLICIES)
	useEffect(() => {
		if (data && data.readPolicies) {	
			setPolicies(data.readPolicies)
		}
	}, [data])

	useEffect(() => {
		console.log(policies[0])
		if (props.form.values.policyId === '' && policies.length > 0 && policies[0]._id) {
			props.form.setValues({...props.form.values, policyId: policies[0]._id })
		}
	}, [policies])

	return (
		<Modal opened={!!props.quotation} onClose={props.close} title='New Quotation'>
			<Select label="Policy Title" data={policies.map(p => ({ label: p.title, value: p._id || '' }))} {...props.form.getInputProps('policyId')}/>
		</Modal>
	)
}

export default QuotationModal