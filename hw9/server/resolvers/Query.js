const Query = {
	async Message(parents, args, {DB, pubsub}, info) {
		let result = []
		const message = await DB.find()
		console.log("args.query", args.query);
		if (!args.query) {
			message.forEach(e => {
				result.push(e);
				console.log("each: ", e );
			})
			
		}
		else {
			const userName = args.query
			message.filter(message => {
				if ((message.fromName === userName) || (message.toName === userName)) {
					result.push(message)
				}
			})
		}
		return result
	}
};

export { Query as default }