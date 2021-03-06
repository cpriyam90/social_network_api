// lesson 18 - Pizza Model - https://courses.bootcampspot.com/courses/1196/pages/18-dot-1-6-create-the-pizza-controller?module_item_id=462978

const router = require('express').Router();

const {
    getallusers,
    getSingleUserById,
    createNewUser,
    updateUserById,
    deleteuserById,
    addNewFriend,
    deleteFriend
  } = require('../../controllers/user');
  
  // all users
  router.route("/").get(getallusers).post(createNewUser);

  // user by id
  router.route("/:id").get(getSingleUserById).put(updateUserById).delete(deleteuserById);
  router.route("/add/:id/friend/:friendid").put(addNewFriend)
  router.route("/delete/:id/friend/:friendid").put(deleteFriend)

  module.exports = router;