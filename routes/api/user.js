// lesson 18 - Pizza Model - https://courses.bootcampspot.com/courses/1196/pages/18-dot-1-6-create-the-pizza-controller?module_item_id=462978

const router = require('express').Router();

const {
    getallusers,
    getSingleUserById,
    createNewUser,
    updateUserById,
    eleteuserById
  } = require('../../controllers/user');
  
  // all users
  router.get('/')
  router.post('/')

  // user by id
  router.get('/:id')
  router.put('/:id')
  router.delete('/:id')
  
  module.exports = router;