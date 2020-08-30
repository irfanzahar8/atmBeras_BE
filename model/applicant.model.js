const mongoose = require('mongoose')

const applicantSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		min: 6,
		max: 255
	},
	idType: {
		type: String,
		required: true,
		enum: ['Mykad', 'MyKid', 'Polis', 'Tentera'],
		default: 'Mykad'
	},
	idNum: {
		type: String,
		required: true,
		min: 6,
		mas: 255
	},
	race: {
		type: String,
		required: true
	},
	isSchooled : {
		type: Boolean,
		required: true
	},
	highestEducation: {
		type: String,
		required: true
	}
})

exports.applicantTransformer = (applicant) => {
	let formatted = {
		id: applicant._id,
		name: applicant.name,
		idNum: applicant.idNum,
		idType: applicant.idType,
		race: applicant.race,
		Schooled: applicant.isSchooled,
		highestEducation: applicant.highestEducation
	}

	return formatted
}

module.exports = mongoose.model('Applicant', applicantSchema)