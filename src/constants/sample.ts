import { Claim } from "../types/claim"
import { Policy } from "../types/policy"

export const SAMPLE_POLICIES: Policy[] = [
	{
		title: 'LifeShield Plus',
		type: 'Life',
		insuredAmount: 150000,
		nextPayment: '2022-07-26T00:00:00+08:00',
		dependants: []
	},
	{
		title: 'CarProtecc',
		type: 'Motor',
		insuredAmount: 25000,
		nextPayment: '2022-07-26T00:00:00+08:00',
		dependants: []
	},
	{
		title: 'VoyageSafe',
		type: 'Travel',
		insuredAmount: 10000,
		nextPayment: '2022-07-26T00:00:00+08:00',
		dependants: ['John Doe', 'Jane Doe', 'Jim Doe']
	},
	{
		title: 'Health Pro',
		type: 'Health',
		insuredAmount: 15000,
		nextPayment: '2022-07-26T00:00:00+08:00',
		dependants: ['John Doe', 'Jane Doe', 'Jim Doe']
	}
]

export const SAMPLE_CLAIMS: Claim[] = [
	{
		_id: 'ABCHLPE4',
		policyId: 'Policy A',
		claimDate: '2022-05-12T08:00:00+08:00',
		claimAmount: 250,
		attachments: ['Images.zip', 'Receipt.pdf'],
		status: 'Submitted'
	},
	{
		_id: 'ABCHLPE4',
		policyId: 'Policy A',
		claimDate: '2022-05-12T08:00:00+08:00',
		claimAmount: 250,
		attachments: ['Images.zip', 'Receipt.pdf'],
		status: 'Completed'
	},
	{
		_id: 'ABCHLPE4',
		policyId: 'Policy A',
		claimDate: '2022-05-12T08:00:00+08:00',
		claimAmount: 250,
		attachments: ['Images.zip', 'Receipt.pdf'],
		status: 'Completed'
	},
	{
		_id: 'ABCHLPE4',
		policyId: 'Policy A',
		claimDate: '2022-05-12T08:00:00+08:00',
		claimAmount: 250,
		attachments: ['Images.zip', 'Receipt.pdf'],
		status: 'Completed'
	},
	{
		_id: 'ABCHLPE4',
		policyId: 'Policy A',
		claimDate: '2022-05-12T08:00:00+08:00',
		claimAmount: 250,
		attachments: ['Images.zip', 'Receipt.pdf'],
		status: 'Submitted'
	},
	{
		_id: 'ABCHLPE4',
		policyId: 'Policy A',
		claimDate: '2022-05-12T08:00:00+08:00',
		claimAmount: 250,
		attachments: ['Images.zip', 'Receipt.pdf'],
		status: 'Completed'
	},
	{
		_id: 'ABCHLPE4',
		policyId: 'Policy A',
		claimDate: '2022-05-12T08:00:00+08:00',
		claimAmount: 250,
		attachments: ['Images.zip', 'Receipt.pdf'],
		status: 'Completed'
	},
	{
		_id: 'ABCHLPE4',
		policyId: 'Policy A',
		claimDate: '2022-05-12T08:00:00+08:00',
		claimAmount: 250,
		attachments: ['Images.zip', 'Receipt.pdf'],
		status: 'Submitted'
	},
	{
		_id: 'ABCHLPE4',
		policyId: 'Policy A',
		claimDate: '2022-05-12T08:00:00+08:00',
		claimAmount: 250,
		attachments: ['Images.zip', 'Receipt.pdf'],
		status: 'Rejected'
	},
	{
		_id: 'ABCHLPE4',
		policyId: 'Policy A',
		claimDate: '2022-05-12T08:00:00+08:00',
		claimAmount: 250,
		attachments: ['Images.zip', 'Receipt.pdf'],
		status: 'Submitted'
	},

]