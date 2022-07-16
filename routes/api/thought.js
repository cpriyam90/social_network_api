const router = require('express').Router();

const {
    getallthoughts,
    getSingleThought,
    createThought,
    updateThoughtbyId,
    deleteThought
} = require('../../controllers/thought');

router.route("/").get(getallthoughts)
router.route("/:userid").post(createThought)

router.route("/:id").get(getSingleThought).put(updateThoughtbyId).delete(deleteThought)

module.exports = router;