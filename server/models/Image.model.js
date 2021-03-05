const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema(
	{
		link: String,
		author: String,
		description: String,
		comments: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Comment',
			},
		],
	},
	{
		timestamps: true,
	}
);


const Image = mongoose.model('Image', imageSchema)
module.exports = Image
