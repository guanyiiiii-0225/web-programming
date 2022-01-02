import { gql } from 'apollo-boost'

export const MESSAGES_QUERY = gql`
	query {
		Message {
			fromName
			toName
			body
		}
	}
`