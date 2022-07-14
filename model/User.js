// **Credits/ Citations**
// Tutor Abdullah for creating user and thought model
// email match from stack overflow for email in schema- https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
// module 18 in bootcamp spot - Pizza Model - https://courses.bootcampspot.com/courses/1196/pages/18-dot-1-5-install-mongoose-and-create-the-pizza-model?module_item_id=462970
// in class activities for module 18


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
        },
        id: false,

    }
)

const User = model("User", user_schema);
module.exports = User