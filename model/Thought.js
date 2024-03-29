// **Credits/ Citations**
// Tutor Abdullah for creating user and thought model and virtual count
// Tutor Abdullah for helping with routes and debugging routes and controllers
// email match from stack overflow for email in schema- https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
// module 18 in bootcamp spot - Pizza Model - https://courses.bootcampspot.com/courses/1196/pages/18-dot-1-5-install-mongoose-and-create-the-pizza-model?module_item_id=462970
// in class activities for module 18
// my backend-ecommerce challenge for coding routes and controllers - lesson 13 and challenge 13
// Tutor Abdullah for creating models, repo structure, fixing routes and controllers and bugs
// Lesson 18 in bootcamp spot for learning how to create code for controllers - https://courses.bootcampspot.com/courses/1196/pages/18-dot-1-6-create-the-pizza-controller?module_item_id=462978

const {Schema, model, Types} = require('mongoose');
const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => {
                new Types.ObjectId;
            }
        },
        reactionBody: {
            type: String,
            required: true,
            max: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
    }

)
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
        reactions: [{
           reactionSchema 
        }]
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