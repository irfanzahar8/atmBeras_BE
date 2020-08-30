const joi = require('@hapi/joi')

const applicantValidator = (data) => {
	const schema = joi.object({
		name: joi.string()
			.min(6)
			.max(255)
			.required(),
		idType: joi.string()
			.required(),
		idNum: joi.string()
			.required(),
		race: joi.string()
			.required(),
		schooled: joi.bool()
			.required(),
		highestEducation: joi.string()
			.required()
	})

	return schema.validate(data)
}

module.exports = {
	applicantValidator
}