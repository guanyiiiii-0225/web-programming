const Subscription = {
	Message: {
		subscribe(parent, args, {DB, pubsub}, info) {
			return pubsub.asyncIterator(`Message`)
		}
	}
};

export {Subscription as default}