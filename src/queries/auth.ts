import { gql } from "@apollo/client";

export const CURRENT_USER = gql`
	query CurrentUser {
		currentUser {
			_id
			name
			email
			... on Broker {
				policies {
					_id
					title
					type
					insuredAmount
					premium
				}
			}
		}
	}	
`

export const LOGIN = gql`
	mutation LoginMutation($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			error
			response
		}
	}
`

export const REGISTER = gql`
	mutation RegisterMutation($name: String!, $email: String!, $password: String!, $type: String!) {
		register(name: $name, email: $email, password: $password, type: $type) {
			error
			response
		}
	}
`