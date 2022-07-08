// https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax

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