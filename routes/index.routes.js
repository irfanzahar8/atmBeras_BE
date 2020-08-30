const router  = require('express').Router()

const verifyToken = require('../services/validate-token')
/**
 * Routes import
 * insert router here
 */
const authRoutes = require('./auth.routes')
const dashboardRoutes = require('./dashboard.routes')
const usersRoutes = require('./user.routes')
const applicantRoutes = require('./applicant.routes')

/**
 * Register routes here
 */
router.use('/auth', authRoutes)
router.use('/dashboard', verifyToken, dashboardRoutes)
router.use('/user', verifyToken, usersRoutes)
router.use('/applicant', verifyToken, applicantRoutes)

module.exports = router

