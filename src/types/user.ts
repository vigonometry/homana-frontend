import { Policy, PolicyTaken } from "./policy"

export interface User {
	__typename: string
	_id: string
	name: string | undefined
	email: string
	policies: Policy[]
	policiesTaken: PolicyTaken[]
}