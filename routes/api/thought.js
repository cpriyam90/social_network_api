const router = require('express').Router();

const {
    getallthoughts,
    getSingleThought,
    createThought,
    updateThoughtbyId,
    deleteThought
} = require('../../controllers/thought');

module.exports = router;