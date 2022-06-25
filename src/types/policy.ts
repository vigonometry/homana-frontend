export interface Policy {
	_id: string | null
	title: string
	type: string
	insuredAmount: number
	premium: number
	nextPayment: Date | undefined // remove during db link
	dependants: string[] | undefined // remove during db link
}