const Mutation = {
	createMessage(parents, args, {DB, pubsub}, info) {
		DB.create(args.data)
		pubsub.publish('Message', {
			Message:{
				mutation: 'CREATED',
				data: args.data
			}
		})

		return args.data
	},

	async deleteMessage(parents, args, {DB, pubsub}, info) {
		await DB.deleteMany({"fromName":args.username})
		await DB.deleteMany({"toName":args.username})
		pubsub.publish('Message', {
			Message:{
				mutation: 'DELETED',
				data: {
					fromName: args.username,
					toName: null,
					body: null,
				}
			}
		})
	}
}

export { Mutation as default }