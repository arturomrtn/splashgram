const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema(
	{
		link: String,
		author: String,
		dateUploaded: Date,
		comments: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Comment',
				autopopulate: true,
			},
		],
	},
	{
		timestamps: true,
	}
);

imageSchema.plugin(require('mongoose-autopopulate'));

const Image = mongoose.model('Image', imageSchema)
module.exports = Image
