import { User } from "./user"

export interface Policy {
	_id: string | null
	title: string
	type: string
	insuredAmount: number
	premium: number
	nextPayment: Date | undefined // remove during db link
	dependants: string[] | undefined // remove during db link
}

export interface PolicyTaken {
	_id?: string | null
	policyId?: string
	clientId?: string
	agentId?: string
	date: string
	status: string
	insuredAmount: number
	premium: number
	policy?: Policy
	client?: User
	agent?: User
	dependants?: string[]
}