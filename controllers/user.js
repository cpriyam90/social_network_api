const { User } = require('../model')

// get all users
const UserDatabase = {
    getallusers(req, res) {
      User.find({})
        .populate({
          path: 'thoughts',
          select: '-__v'
        })
        .select('-__v')
        .then(dbSocialUser => res.json(dbSocialUser))
        .catch(err => {
          console.log(err);
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
            console.log(err);
            res.sendStatus(400);
        });
    },
}

// create new users 
// update a user by their id
// delete a user by their id
// add a new friend
// delete a friend