import { gql } from "@apollo/client";

export const READ_TRANSACTIONS = gql`
	query ReadTransactions {
		readTransactions {
			_id
			date
			name
			amount
			categories
		}
	}
`

export const CREATE_TRANSACTION = gql`
	mutation CreateTransaction($date: String!, $name: String!, $amount: Float!, $categories: [String!]!) {
		createTransaction(date: $date, name: $name, amount: $amount, categories: $categories) {
			response
			error
		}
	}
`

export const UPDATE_TRANSACTION = gql`
	mutation UpdateTransaction($_id: ID!, $date: String!, $name: String!, $amount: Float!, $categories: [String!]!) {
		updateTransaction(_id: $_id, date: $date, name: $name, amount: $amount, categories: $categories) {
			response
			error
		}
	}
`

export const DELETE_TRANSACTION = gql`
	mutation DeleteTransaction($_id: ID!) {
		deleteTransaction(_id: $_id) {
			response
			error
		}
	}
`