import { useMutation } from "@apollo/client";
import { ActionIcon, Button, Divider, Group, Modal, NumberInput, Select, Stack, Text, Title } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { Dropzone } from "@mantine/dropzone";
import { useForm } from "@mantine/hooks";
import { useContext, useEffect, useState } from "react";
import { Trash } from "tabler-icons-react";
import { CREATE_CLAIM } from "../../queries/claims";
import { UserContext } from "../../services/userContextProvider";
import { Callbacks } from "../../types/callbacks";
import { Claim } from "../../types/claim";

interface NewClaimModalProps {
	isOpened: boolean
	close: () => void
	callbacks: Callbacks<Claim>
}

export default function NewClaimModal(props: NewClaimModalProps) {
	const { user } = useContext(UserContext)
	const form = useForm<Claim>({ initialValues: {
		policyId: user && user.policiesTaken && user?.policiesTaken.length > 0 ? user?.policiesTaken[0]._id || '' : '',
		receiptDate: new Date().toISOString(),
		receiptAmount: 0,
		claimAmount: 0,
		attachments: []
	}})
	const [createClaim] = useMutation(CREATE_CLAIM, {
		variables: form.values,
		onCompleted: ({ createClaim }) => {
			if (createClaim.response) {
				props.callbacks.create({...form.values, claimDate: new Date().toISOString(), status: 'APPLIEd', _id: createClaim.response})
				props.close()
			}
		}
	})
	useEffect(() => {
		form.setValues({...form.values, policyId: user && user.policiesTaken && user?.policiesTaken.length > 0 ? user?.policiesTaken[0]._id || '' : '' })
	}, [user])
	if (!user || !user.policiesTaken) return <></>
	return (
		<Modal opened={props.isOpened} onClose={props.close} title={'New Claim'} styles={{ title: { fontWeight: 'bold' }}}>
			<Stack spacing='md'>
				<Stack spacing='xs' p='xs'>
					<Select label='Associated with' data={user.policiesTaken.filter(p => p.status === 'APPROVED').map(p => ({ value: p._id || '', label: p.policy?.title }))} {...form.getInputProps('policyId')}/>
				</Stack>
				<Divider/>
				<Stack spacing='xs' p='xs'>
					<Title order={6}>Receipt Details</Title>
					<NumberInput label='Receipt Amount' {...form.getInputProps('receiptAmount')}/>
					<DatePicker label='Receipt Date' {...form.getInputProps('receiptDate')} value={ new Date(form.values.receiptDate) }/>
				</Stack>
				<Divider/>
				<Stack spacing='xs' p='xs'>
					<Title order={6}>Claim Details</Title>
					<NumberInput label='Claim Amount' {...form.getInputProps('claimAmount')}/>
				</Stack>
				<Divider/>
				<Stack spacing='xs' p='xs'>
					<Title order={6}>Attachments</Title>
					<Dropzone onDrop={(files) => form.setValues({...form.values, attachments: [...form.values.attachments, ...files.map(f => f.name)]})}>
						{ (status) => <Text size="sm">Upload</Text>}
					</Dropzone>
					<Stack mt='xs' spacing={2}>
						{ form.values.attachments.map(a => (
							<Group position="apart">
								<Text size="sm">{a}</Text>
								<ActionIcon color='red' onClick={() => form.setValues({...form.values, attachments: form.values.attachments.filter(x => x !== a)})}>
									<Trash/>
								</ActionIcon>
							</Group>
						))}
					</Stack>
				</Stack>
				<Group>
					<Button onClick={() => createClaim()}>Sign and Submit</Button>
				</Group>
			</Stack>
		</Modal>
	)
}