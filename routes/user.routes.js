const router = require('express').Router()

const usersController = require('../controller/user.controller')

router.get('/me', usersController.me)
	.get('/:id', usersController.getById)

module.exports = router
