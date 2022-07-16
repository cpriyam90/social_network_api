const router = require('express').Router();

const {
    getallthoughts,
    getSingleThought,
    createThought,
    updateThoughtbyId,
    deleteThought,
    createareaction,
    deletereaction
} = require('../../controllers/thought');

router.route("/").get(getallthoughts)
router.route("/:userid").post(createThought)

router.route("/:id").get(getSingleThought).put(updateThoughtbyId).delete(deleteThought)
router.route("/:id/addreaction").put(createareaction)
router.route("/:id/removereaction/:reactionId").put(deletereaction)

module.exports = router;