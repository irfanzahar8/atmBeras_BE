const { Applicant, applicantTransformer } = require('../model/applicant.model')

exports.getById = async (req, res) => {
	let id = req.params.id

	const applicant = await Applicant.findById(id)
	if (!applicant) return res.status(400).json({ error: 'Applicant Not Found' })

	return res.json(applicantTransformer(applicant))
}

exports.deleteById = async (req, res) => {
	let id = req.params.id

	try {
		const deleted = await Applicant.findByIdAndRemove(id)
		if (!deleted) return res.status(404).json({ error: 'Not Found' })

		return deleted
	}
	catch(err) {
		res.status(500).send({ error: `Could not delete data with id ${id}` })
	}
}