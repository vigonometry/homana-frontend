import { useMutation, useQuery } from "@apollo/client";
import { Button, Group, Modal, NumberInput, Select, Space, Stack, Text, TextInput } from "@mantine/core";
import { UseForm } from "@mantine/hooks/lib/use-form/use-form";
import { useContext, useEffect, useState } from "react";
import { READ_POLICIES } from "../../queries/policy";
import { CREATE_POLICY_TAKEN } from "../../queries/policyTaken";
import { UserContext } from "../../services/userContextProvider";
import { Callbacks } from "../../types/callbacks";
import { Policy, PolicyTaken } from "../../types/policy";

interface QuotationModalProps {
	quotation: PolicyTaken | null
	close: () => void
	form: UseForm<PolicyTaken>
	callbacks: Callbacks<PolicyTaken>
}

function QuotationModal(props: QuotationModalProps) {
	const { user } = useContext(UserContext)
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
	useEffect(() => {
		const policy = policies.find(p => p._id === props.form.values.policyId)
		props.form.setValues({...props.form.values, insuredAmount: policy?.insuredAmount || 0, premium: policy?.premium || 0})
	}, [props.form.values.policyId])

	const [createQuotation] = useMutation(CREATE_POLICY_TAKEN, {
		variables: {
			policyId: props.form.values.policyId,
			clientEmail: props.form.values.clientId,
			agentId: user?._id || null,
			insuredAmount: props.form.values.insuredAmount,
			premium: props.form.values.premium
		},
		onCompleted: ({ createPolicyTaken }) => {
			if (createPolicyTaken.response) {
				props.callbacks.create(props.form.values)
				props.close()
			}
		}
	})
	
	return (
		<Modal padding='xl' opened={!!props.quotation} onClose={props.close} title='New Quotation'>
			<Stack>
				<TextInput label='Client Email' placeholder="user@mail.com" {...props.form.getInputProps('clientId')}/>
				<Select label="Policy Title" data={policies.map(p => ({ label: p.title, value: p._id || '' }))} {...props.form.getInputProps('policyId')}/>
				<NumberInput label='Insured Amount' {...props.form.getInputProps('insuredAmount')} description={`The recommended insured amount for this policy is ${props.form.values.insuredAmount} S$`}/>
				<NumberInput label='Premium' {...props.form.getInputProps('premium')} description={`The recommended premium for this policy is ${props.form.values.premium} S$`}/>
				<Space/>
				<Group>
					<Button onClick={() => createQuotation()}>Sign and Send</Button>
					<Text size='xs' color='dimmed'>By clicking Sign and Send, ...</Text>
				</Group>
			</Stack>
		</Modal>
	)
}

export default QuotationModal