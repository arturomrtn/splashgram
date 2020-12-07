const mongoose = require('mongoose')
const Schema = mongoose.Schema

const albumSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: true,
    },
    images: [
        {
            link: String,
            autor: String,
            dateUploaded: String,
            liked: [
                {
                    userId: {
                        type: Schema.Types.ObjectId,
                        ref: 'User',
                        autopopulate: true,
                    },
                },
            ],
            comments: [
                {
                    userId: {
                        type: Schema.Types.ObjectId,
                        ref: 'User',
                        autopopulate: true,
                    },
                    body: {
                        type: String,
                        required: true,
                        trim: true,
                    },
                    commentLikes: [
                        {
                            userId: {
                                type: Schema.Types.ObjectId,
                                ref: 'User',
                                autopopulate: true,
                            },
                        },
                    ],
                },
            ],
        },
    ],
    timestamps: true,
});

albumSchema.plugin(require('mongoose-autopopulate'));
export default mongoose.model('Album', albumSchema) 