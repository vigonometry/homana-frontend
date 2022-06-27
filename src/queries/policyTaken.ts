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
				}
			}
			... on Client {
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
				}
			}
		}
	}
`