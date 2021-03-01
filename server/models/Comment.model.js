const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    body: {
        type: String,
        required: true,
        trim: true,
    },
    commentLikes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ]
    }
)

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment
