import { gql } from "@apollo/client";

export const READ_CLAIMS = gql`
	query Claims {
		currentUser {
			... on Agent {
				claims {
					_id
					receiptDate
					claimDate
					receiptAmount
					policyId
					claimAmount
					attachments
					status
					client {
						name
						email
					}
				}
			}
			... on Broker {
				claims {
					_id
					receiptDate
					claimDate
					receiptAmount
					policyId
					claimAmount
					attachments
					status
					client {
						name
						email
					}
				}
			}
			... on Client {
				claims {
					_id
					receiptDate
					claimDate
					receiptAmount
					policyId
					claimAmount
					attachments
					status
				}
			}
		}
	}
`

export const CREATE_CLAIM = gql`
	mutation CreateClaim($policyId: ID!, $receiptDate: String!, $receiptAmount: Float!, $claimAmount: Float!, $attachments: [String!]!) {
		createClaim(policyId: $policyId, receiptDate: $receiptDate, receiptAmount: $receiptAmount, claimAmount: $claimAmount, attachments: $attachments) {
			response
			error
		}
	}
`

export const CLAIM_NEXT_STEP = gql`
	mutation ClaimNext($_id: ID!, $status: Status!) {
		claimNext(_id: $_id, status: $status) {
			response
			error
		}
	}
`

export const CLAIM_CANCEL = gql`
	mutation ClaimCancel($_id: ID!, $status: Status!) {
		claimCancel(_id: $_id, status: $status) {
			response
			error
		}
	}
`