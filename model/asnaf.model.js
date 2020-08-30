const mongoose = require('mongoose')


const lampiranA = new mongoose.Schema({

})

const lampiranB = new mongoose.Schema({

})

const asnafSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		min: 6,
		max: 255
	},

})

exports.asnafTransformer = (asnaf) => {

	let formatted = {

	}

	return formatted
}

module.exports = mongoose.model('Asnaf', asnafSchema)