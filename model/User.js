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

        }
    }
)