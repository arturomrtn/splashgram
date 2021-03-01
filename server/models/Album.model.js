const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			autopopulate: true,
		},
		name: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			trim: true,
		},
		images: [

			{
				type: Schema.Types.ObjectId,
				ref: 'Image',
				autopopulate: true,
			},

		],
	},
	{
		timestamps: true,
	}
);

albumSchema.plugin(require('mongoose-autopopulate'));

const Album = mongoose.model('Album', albumSchema)
module.exports = Album
