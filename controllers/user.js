// **Credits/ Citations**
// Tutor Abdullah for creating user and thought model and virtual count
// Tutor Abdullah for helping with routes and debugging routes and controllers
// email match from stack overflow for email in schema- https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
// module 18 in bootcamp spot - Pizza Model - https://courses.bootcampspot.com/courses/1196/pages/18-dot-1-5-install-mongoose-and-create-the-pizza-model?module_item_id=462970
// in class activities for module 18
// my backend-ecommerce challenge for coding routes and controllers - lesson 13 and challenge 13
// Tutor Abdullah for creating models, repo structure, fixing routes and controllers and bugs
// Lesson 18 in bootcamp spot for learning how to create code for controllers - https://courses.bootcampspot.com/courses/1196/pages/18-dot-1-6-create-the-pizza-controller?module_item_id=462978

const { User } = require('../model')

const UserDatabase = {
// get all users
    getallusers(req, res) {
      User.find({})
        .populate({
          path: 'thoughts',
          select: '-__v'
        })
        .select('-__v')
        .then(dbSocialUser => res.json(dbSocialUser))
        .catch(err => {
          res.sendStatus(400).json(err);
        });
    },
// get a single user by their id
    getSingleUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .select('-__v')
        .then(dbSocialUser => res.json(dbSocialUser))
        .catch(err => {
            res.sendStatus(400).json(err);
        });
    },

// create new users 
    createNewUser({ body }, res) {
         User.create(body)
        .then(dbSocialUser => res.json(dbSocialUser))
        .catch(err => {
            res.status(400).json(err);
            console.log(err)
          })
    },
 
// update a user by their id  
    updateUserById({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbSocialUser => {
            if (!dbSocialUser) {
            res.status(404).json({ message: 'No user exists with this ID' });
            return;
            }
            res.json(dbSocialUser);
        })
        .catch(err => {
            res.status(400).json(err);
          })
    },
 
// delete a user by their id
    deleteuserById({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbSocialUser => res.json(dbSocialUser))
        .catch(err => {
            res.status(400).json(err);
          })
    },

// add a new friend    
    addNewFriend({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, {$addToSet:{friends: params.friendid}}, { new: true })
        .then(dbSocialUser => {
            if (!dbSocialUser) {
            res.status(404).json({ message: 'No user exists with this ID' });
            }
            res.json("new friend has been added");
        })
        .catch(err => {
            res.status(400).json(err);
            console.log(err)
          })
    }, 

// delete a friend
    deleteFriend({ params }, res) {
        User.findOneAndUpdate({ _id: params.id }, {$pull:{friends: params.friendid}}, { new: true })
        .then(dbSocialUser => {
            if (!dbSocialUser) {
            res.status(404).json({ message: 'No user exists with this ID' });
            }
            res.json("friend has been deleted");
        })
        .catch(err => {
            res.status(400).json(err);
            console.log(err)
          })
        }
}

module.exports = UserDatabase;






