import { gql } from "@apollo/client";

export const READ_CLAIMS = gql`
	query Claims {
		currentUser {
			... on Agent {
				claims {
					_id
				}
			}
			... on Broker {
				claims {
					_id
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

