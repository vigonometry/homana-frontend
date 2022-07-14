import { useMutation } from "@apollo/client"
import { ActionIcon, Button, Group, Modal, NumberInput, Select, Stack, TextInput } from "@mantine/core"
import { UseForm } from "@mantine/hooks/lib/use-form/use-form"
import { Trash } from "tabler-icons-react"
import POLICY_TYPES from "../../constants/policyTypes"
import { CREATE_POLICY, DELETE_POLICY, UPDATE_POLICY } from "../../queries/policy"
import { Callbacks } from "../../types/callbacks"
import { Policy } from "../../types/policy"

interface PolicyModalProps {
	policy: Policy | null
	close: () => void
	form: UseForm<Policy>
	callbacks: Callbacks<Policy>
}

function PolicyModal(props: PolicyModalProps) {
	const title = props.form.values.title === '' ? props.policy?._id ? props.policy.title : 'New Policy'  : props.form.values.title
	const [create] = useMutation(CREATE_POLICY, {
		variables: props.form.values,
		onCompleted: ({ createPolicy }) => {
			if (createPolicy.response) {
				props.callbacks.create({...props.form.values, _id: createPolicy.response})
				props.close()
			}
		}
	})

	const [update] = useMutation(UPDATE_POLICY, {
		variables: props.form.values,
		onCompleted: ({ updatePolicy }) => {
			if (updatePolicy.response) {
				props.callbacks.update(props.form.values)
				props.close()
			}
		}
	})

	const [delet] = useMutation(DELETE_POLICY, {
		variables: props.form.values,
		onCompleted: ({ deletePolicy }) => {
			if (deletePolicy.response) {
				props.callbacks.delete(props.form.values._id || '')
				props.close()
			}
		}
	})

	const handleCreate = () => {
		create();
	}

	return (
		<Modal opened={props.policy !== null} styles={{ title: { fontWeight: 'bold'}}} onClose={props.close} title={title}>
			<Stack>
				<TextInput label='Title' {...props.form.getInputProps('title')}/>
				<Select label="Policy Type" data={POLICY_TYPES} {...props.form.getInputProps('type')}/>
				<NumberInput label="Insured Amount - Default" {...props.form.getInputProps('insuredAmount')}/>
				<NumberInput label="Monthly Premium - Default" {...props.form.getInputProps('premium')}/>
				<Group mt='lg' position="apart">
					<Button onClick={() => props.form.values._id ? update() : handleCreate()}>{props.form.values._id ? 'Update' : 'Create'}</Button>
					{ props.form.values._id &&
						<ActionIcon onClick={() => delet()} color='red'>
							<Trash/>
						</ActionIcon>
					}
				</Group>
			</Stack>
		</Modal>
	)
}

export default PolicyModal