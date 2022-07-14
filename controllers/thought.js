// https://courses.bootcampspot.com/courses/1196/pages/18-dot-2-5-create-the-pizza-controller-methods?module_item_id=463054
// https://courses.bootcampspot.com/courses/1196/pages/18-dot-1-1-introduction?module_item_id=462937

const { Thought, User } = require('../model');

const ThoughtDatabase = {
    // get thoughts
        getallthoughts(req, res) {
          Thought.find({})
            // .populate({
            //   path: 'thoughts',
            //   select: '-__v'
            // })
            .select('-__v')
            .then(dbUserThoughts => res.json(dbUserThoughts))
            .catch(err => {
              res.sendStatus(400);
            });
        },
    }
// get a single though by its id
// create a thought
// update thought by its id
// delete a thought by its id
// create a reaction
// delete a reaction by reactionID

module.exports = ThoughtDatabase;
