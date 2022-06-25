import { Button, Group, SimpleGrid, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { useContext, useState } from "react";
import POLICY_TYPES from "../../constants/policyTypes";
import { UserContext } from "../../services/userContextProvider";
import { Policy } from "../../types/policy";
import userComponentSelector from "../../utils/userComponentSelector";
import PolicyCard from "./PolicyCard";
import PolicyModal from "./PolicyModal";

interface PoliciesGridProps {
	policies: Policy[]
	mini?: boolean | undefined
}

const emptyPolicy = {
	_id: null,
	title: '',
	type: POLICY_TYPES[0],
	insuredAmount: 0,
	nextPayment: new Date(),
	dependants: []
}

function PoliciesGrid(props: PoliciesGridProps) {
	const {user} = useContext(UserContext)
	const [selected, setSelected] = useState<Policy | null>(null)
	const form = useForm<Policy>({ initialValues: emptyPolicy})
	const policyClick = (p: Policy) => () => {
		form.setValues(p)
		setSelected(p)
	}
	const close = () => {
		form.setValues(emptyPolicy)
		setSelected(null)
	}
	if (!user) return <></>
	return (
		<Stack spacing='xl'>
			<PolicyModal form={form} policy={selected} close={close}/>
			<Group>
				<TextInput placeholder="Search" size="md"/>
				{userComponentSelector(user, { broker: <Button>New Policy</Button>})}
			</Group>
			<SimpleGrid breakpoints={[{ minWidth: 'sm', cols: 1}, { minWidth: 'md', cols: 2}, { minWidth: 'lg', cols: 3}]}>
				{props.policies.map(p => <PolicyCard onClick={policyClick(p)} mini={props.mini} policy={p}/>)}
			</SimpleGrid>
		</Stack>
	)
}

export default PoliciesGrid;