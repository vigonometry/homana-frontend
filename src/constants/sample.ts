import { Claim } from "../types/claim"
import { Policy } from "../types/policy"

export const SAMPLE_POLICIES: Policy[] = [
	{
		_id: 'po121',
		title: 'LifeShield Plus',
		type: 'Life',
		insuredAmount: 150000,
		premium: 500,
		nextPayment: '2022-07-26T00:00:00+08:00',
		dependants: []
	},
	{
		_id: 'po122',
		title: 'CarProtecc',
		type: 'Motor',
		insuredAmount: 25000,
		premium: 500,
		nextPayment: '2022-07-26T00:00:00+08:00',
		dependants: []
	},
	{
		_id: 'po123',
		title: 'VoyageSafe',
		type: 'Travel',
		insuredAmount: 10000,
		premium: 500,
		nextPayment: '2022-07-26T00:00:00+08:00',
		dependants: ['John Doe', 'Jane Doe', 'Jim Doe']
	},
	{
		_id: 'po124',
		title: 'Health Pro',
		type: 'Health',
		insuredAmount: 15000,
		premium: 500,
		nextPayment: '2022-07-26T00:00:00+08:00',
		dependants: ['John Doe', 'Jane Doe', 'Jim Doe']
	}
].map(p => ({...p, nextPayment: new Date(p.nextPayment)}))

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