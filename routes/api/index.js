// Lesson 18 - bootcampo spot on Pizza model - https://courses.bootcampspot.com/courses/1196/pages/18-dot-1-7-create-the-pizza-api-routes?module_item_id=462987

const router = require('express').Router();
const userRoute = require('./user');
const thoughtRoute = require('./thought');

router.use('/user', userRoute);
router.use('/thought', thoughtRoute);

module.exports = router;