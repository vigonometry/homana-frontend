import { Button, Group, Modal, NumberInput, Select, Stack, TextInput } from "@mantine/core"
import { UseForm } from "@mantine/hooks/lib/use-form/use-form"
import POLICY_TYPES from "../../constants/policyTypes"
import { Policy } from "../../types/policy"

interface PolicyModalProps {
	policy: Policy | null
	close: () => void
	form: UseForm<Policy>
}

function PolicyModal(props: PolicyModalProps) {
	const title = props.form.values.title === '' ? props.policy?.title : props.form.values.title
	return (
		<Modal opened={props.policy !== null} styles={{ title: { fontWeight: 'bold'}}} onClose={props.close} title={title}>
			<Stack>
				<TextInput label='Title' {...props.form.getInputProps('title')}/>
				<Select label="Policy Type" data={POLICY_TYPES} {...props.form.getInputProps('type')}/>
				<NumberInput label="Insured Amount" {...props.form.getInputProps('insuredAmount')}/>
				<Group mt='lg'>
					<Button>Update</Button>
				</Group>
			</Stack>
		</Modal>
	)
}

export default PolicyModal