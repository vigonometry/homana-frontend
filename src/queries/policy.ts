import { gql } from "@apollo/client";

export const CREATE_POLICY = gql`
	mutation CreatePolicy($title: String!, $type: String!, $insuredAmount: Float!, $premium: Float!) {
		createPolicy(title: $title, type: $type, insuredAmount: $insuredAmount, premium: $premium) {
			response
			error
		}
	}
`

export const READ_POLICIES = gql`
	query ReadPolicies {
		readPolicies {
			_id
			title
			type
			insuredAmount
			premium
		}
	}
`

export const UPDATE_POLICY = gql`
	mutation UpdatePolicy($_id: ID!, $title: String!, $type: String!, $insuredAmount: Float!, $premium: Float!) {
		updatePolicy(_id: $_id, title: $title, type: $type, insuredAmount: $insuredAmount, premium: $premium) {
			response
			error
		}
	}
`

export const DELETE_POLICY = gql`
	mutation DeletePolicy($_id: ID!) {
		deletePolicy(_id: $_id) {
			response
			error
		}
	}
`