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
          res.sendStatus(400);
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
            res.sendStatus(400);
        });
    },

// create new users 
    createNewUser({ body }, res) {
         User.create(body)
        .then(dbSocialUser => res.json(dbSocialUser))
        .catch(err => {
            res.status(400).json(error);
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
            res.status(400).json(error);
          })
    },
 
// delete a user by their id
    deleteuserById({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbSocialUser => res.json(dbSocialUser))
        .catch(err => {
            res.status(400).json(error);
          })
    },

// add a new friend    
    addNewFriend({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbSocialUser => {
            if (!dbSocialUser) {
            res.status(404).json({ message: 'No user exists with this ID' });
            return;
            }
            res.json(dbSocialUser);
        })
        .catch(err => {
            res.status(400).json(error);
          })
    }, 

// delete a friend
    deleteFriend({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbSocialUser => res.json(dbSocialUser))
        .catch(err => {
            res.status(400).json(error);
        })  
},
}

module.exports = UserDatabase;






