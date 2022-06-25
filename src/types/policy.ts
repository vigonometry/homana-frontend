export interface Policy {
	// _id: string
	title: string
	type: string
	insuredAmount: number
	nextPayment: string // remove during db link
	dependants: string[] // remove during db link
}