export interface Claim {
	_id: string
	policyId: string
	// clientId: string
	// claimType: string
	// receiptDate: string
	claimDate: string
	// receiptAmount: number
	claimAmount: number
	attachments: string[]
	status: string
}