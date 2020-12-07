const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema(
	{
		link: String,
		author: String,
		dateUploaded: String,
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
	{
		timestamps: true,
	}
);

imageSchema.plugin(require('mongoose-autopopulate'));

const Image = mongoose.model('Image', imageSchema)
module.exports = Image
