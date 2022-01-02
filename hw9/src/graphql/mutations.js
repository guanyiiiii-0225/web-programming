import { gql } from 'apollo-boost'

const CREATE_MESSAGE_MUTATION = gql`
	mutation createMessage(
		$fromName: String!
		$toName: String!
		$body: String!
		) {
			createMessage(
			data: {
				fromName: $fromName
				toName: $toName
				body: $body
			}
		) {
			fromName
			toName
			body
		}
	}
`

const DELETE_MESSAGE_MUTATION = gql`
	mutation deleteMessage(
		$username: String!
		) {
			deleteMessage(
			username: $username
		) {
			fromName
			toName
			body
		}
	}
`

export {CREATE_MESSAGE_MUTATION, DELETE_MESSAGE_MUTATION}