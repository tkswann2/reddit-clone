'use strict'

const {Router} = require('express')
  ,     router = Router()
  ,       home = require('../controllers/home')
  ,    newPost = require('../controllers/new')
  ,    comments = require('../controllers/comments')
  ,    session = require('../controllers/session')
  ,    user = require('../controllers/user')

router.get('/', home.new)

router.get('/comments/:id', comments.new)

router.get('/register', user.new)
router.post('/register', user.create)

router.get('/login', session.new)
router.post('/login', session.create)

// guardRoutes middleware
router.use((req,res,next) => {
  if(req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/login')
  }
})

router.post('/', home.edit)

router.get('/new', newPost.new)

router.post('/new', newPost.create)

router.post('/comments/:id', comments.create)

router.get('/logout', session.edit)
router.post('/logout', session.destroy)

module.exports = router
