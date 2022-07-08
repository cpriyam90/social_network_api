const {Schema, model} = require('mongoose');

const thought_schema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            min:1,
            max:280
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: [
            {
                type: String,
                required: true
            }
        ],
        // reactions: [{
            
        // }]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,

    }
)
const Thought = model("Thought", thought_schema);
module.exports = Thought