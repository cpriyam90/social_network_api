// **Credits/ Citations**
// Tutor Abdullah for creating user and thought model and virtual count
// Tutor Abdullah for helping with routes and debugging routes and controllers
// email match from stack overflow for email in schema- https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
// module 18 in bootcamp spot - Pizza Model - https://courses.bootcampspot.com/courses/1196/pages/18-dot-1-5-install-mongoose-and-create-the-pizza-model?module_item_id=462970
// in class activities for module 18
// my backend-ecommerce challenge for coding routes and controllers - lesson 13 and challenge 13
// Tutor Abdullah for creating models, repo structure, fixing routes and controllers and bugs
// Lesson 18 in bootcamp spot for learning how to create code for controllers - https://courses.bootcampspot.com/courses/1196/pages/18-dot-1-6-create-the-pizza-controller?module_item_id=462978


const {Schema, model} = require('mongoose');

const user_schema = new Schema(
    {
      userName: {
            type: String,
            unique: true,
            required: true,
            trimmed: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match:[/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/]
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: "Thought",
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref:"User",
        }]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,

    }
)

user_schema.virtual("count").get(function(){
    return this.friends.length
})
const User = model("User", user_schema);
module.exports = User