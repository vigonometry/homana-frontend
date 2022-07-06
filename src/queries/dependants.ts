import { gql } from "@apollo/client";

export const UPDATE_DEPENDANTS = gql`
	mutation UpdateDependants($dependants: [String!]!) {
		updateDependants(dependants: $dependants) {
			response
			error
		}
	}
`

export const READ_DEPENDANTS = gql`
	query ReadDependants {
		currentUser {
			... on Client {
				dependants
			}
		}
	}
`