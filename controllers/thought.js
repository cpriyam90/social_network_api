// https://courses.bootcampspot.com/courses/1196/pages/18-dot-2-5-create-the-pizza-controller-methods?module_item_id=463054
// https://courses.bootcampspot.com/courses/1196/pages/18-dot-1-1-introduction?module_item_id=462937

const { Thought, User } = require('../model');

const ThoughtDatabase = {
    // get thoughts
        getallthoughts(req, res) {
          Thought.find({})
            .then(dbUserThoughts => res.json(dbUserThoughts))
            .catch(err => {
              res.sendStatus(400);
            });
        },

    // get a single though by its id
        getSingleThought({ params }, res) {
          Thought.findOne({ _id: params.id })
          .populate({
              path: 'thoughts',
              select: '-__v'
          })
          .select('-__v')
          .then(dbUserThoughts => res.json(dbUserThoughts))
          .catch(err => {
              res.sendStatus(400);
          });
      },  

    // create a thought
      createThought({ body }, res) {
        Thought.create(body)
        .then(dbUserThoughts => res.json(dbUserThoughts))
        .catch(err => {
            res.status(400).json(error);
          })
      },

    // update thought by its id
      updateThoughtbyId({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbUserThoughts => {
            if (!dbUserThoughts) {
            res.status(404).json({ message: 'No thought exists with this ID' });
            return;
            }
            res.json(dbUserThoughts);
        })
        .catch(err => {
            res.status(400).json(error);
          })
      },
    // delete a thought by its id
    // create a reaction
    // delete a reaction by reactionID
  }




module.exports = ThoughtDatabase;
