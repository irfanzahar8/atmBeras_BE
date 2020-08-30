const router = require('express').Router()

// Controller import
const applicantController = require('../controller/applicant.controller.js')

router.get('/:id', applicantController.getById)
	.delete('/:id', applicantController.deleteById)

module.exports = router