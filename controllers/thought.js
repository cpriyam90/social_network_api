// https://courses.bootcampspot.com/courses/1196/pages/18-dot-2-5-create-the-pizza-controller-methods?module_item_id=463054
// https://courses.bootcampspot.com/courses/1196/pages/18-dot-1-1-introduction?module_item_id=462937

const { Thought, User } = require('../model');

const ThoughtDatabase = {
    // get thoughts
        getallthoughts(req, res) {
          Thought.find({})
            .then(dbUserThoughts => res.json(dbUserThoughts))
            .catch(err => {
              res.sendStatus(400).json(err);
            });
        },

    // get a single though by its id
        getSingleThought({ params }, res) {
          Thought.findOne({ _id: params.id })
          .then(dbUserThoughts => res.json(dbUserThoughts))
          .catch(err => {
              res.sendStatus(400).json(err);
          });
      },  

    // create a thought
      createThought({ params, body }, res) {
        Thought.create(body)
        .then (newthought => {
            return User.findOneAndUpdate(
              {_id: params.userid}, 
              {$push:{thoughts: newthought._id}},
              {new: true}
            )
        })
        .then (thought =>{
          res.json(thought)
        })
        .catch(err => {
          res.sendStatus(400).json(err);
      });
      },

    // update thought by its id
      updateThoughtbyId({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbUserThoughts => {
            if (!dbUserThoughts) {
            res.status(404).json({ message: 'No thought exists with this ID' });
            return;
            }
            res.json("thought has been updated");
        })
        .catch(err => {
            res.status(400).json(error);
          })
      },

    // delete a thought by its id
      deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
        .then(dbUserThoughts => res.json("thought has been deleted"))
        .catch(err => {
            res.status(400).json("error");
          })
      },
    // create a reaction
     createareaction (req, res){
      Thought.findOneAndUpdate({ _id: req.params.id }, {$addToSet:{reactions: req.body}}, { new: true })
        .then(dbUserThoughts => {
            if (!dbUserThoughts) {
            res.status(404).json({ message: 'No thought exists with this ID' });
            }
            res.json("new reaction has been added");
        })
        .catch(err => {
            res.status(400).json(err);
            console.log(err)
          })
     },

    // delete a reaction by reactionID
    deletereaction (req, res){
      Thought.findOneAndUpdate({ _id: req.params.id }, {$pull:{reactions: {_id: req.params.reactionId}}}, { new: true })
      .then(dbSocialUser => {
          if (!dbSocialUser) {
          res.status(404).json({ message: 'No reaction exists with this ID' });
          }
          res.json("reaction has been deleted");
      })
      .catch(err => {
          res.status(400).json(err);
          console.log(err)
        })
      } 
    
  }

module.exports = ThoughtDatabase;
