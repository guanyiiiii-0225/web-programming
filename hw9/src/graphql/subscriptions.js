import { gql } from 'apollo-boost'

export const MESSAGES_SUBSCRIPTION = gql`
	subscription {
		Message {
			mutation
			data {
				fromName
				toName
				body
			}
		}
	}
`