import { gql } from "@apollo/client";

export const GET_CURRENT_POLICIES_TAKEN = gql`
	query CurrentPoliciesTaken {
		currentUser {
			... on Agent {
				policiesTaken {
					_id
					policy {
						title
					}
					client {
						name
					}
					agent {
						name
					}
					date
					status
					insuredAmount
					premium
					dependants
				}
			}
			... on Client {
				policiesTaken {
					_id
					policy {
						title
						type
					}
					client {
						name
					}
					agent {
						name
						email
					}
					policyId
					date
					status
					insuredAmount
					premium
					dependants
				}
			}
			... on Broker {
				policiesTaken {
					_id
					policy {
						title
						type
					}
					client {
						name
					}
					agent {
						name
						email
					}
					date
					status
					insuredAmount
					premium
					dependants
				}
			}
		}
	}
`

export const CREATE_POLICY_TAKEN = gql`
	mutation CreatePolicyTaken($policyId: ID!, $clientEmail: ID!, $agentId: ID!, $insuredAmount: Float!, $premium: Float!) {
		createPolicyTaken(policyId: $policyId, clientEmail: $clientEmail, agentId: $agentId, insuredAmount: $insuredAmount, premium: $premium) {
			response
			error
		}
	}
`

export const POLICY_TAKEN_NEXT_STEP = gql`
	mutation PolicyTakenNext($_id: ID!, $status: Status!) {
		policyTakenNext(_id: $_id, status: $status) {
			response
			error
		}
	}
`

export const POLICY_TAKEN_CANCEL = gql`
	mutation PolicyTakenCancel($_id: ID!, $status: Status!) {
		policyTakenCancel(_id: $_id, status: $status) {
			response
			error
		}
	}
`

export const UPDATE_PT_DEPENDANTS = gql`
	mutation UpdatePTDependants($_id: ID!, $dependants: [String!]!) {
		updatePTDependants(_id: $_id, dependants: $dependants) {
			response
			error
		}
	}
`
