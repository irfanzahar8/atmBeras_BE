const { User, userTransformer } = require('../model/user.model')
//const userTransformer = require('../transformers/user.transformer')

exports.me = async (req, res) => {
	/*
	User.findById(req.user.id, (err, user) => {
		if(err) return res.status(400).json({ error: err.details[0].message })

		// TODO: Transformer
		// return res.json(userTransformer.transform(user))
		return res.json(userTransformer(user))
	})
	*/
	const user = await User.findById(req.user.id)
	if(!user) return res.status(400).json({ error: 'Error has occurred '})

	return res.json(userTransformer(user))
}

exports.getById = async (req, res) => {
	let id = req.params.id

	// Id is fetch from the param of the api call
	const user = await User.findById(id)
	if (!user) return res.status(400).json({ error: 'Error has occured' })

	return res.json(userTransformer(user))
}
