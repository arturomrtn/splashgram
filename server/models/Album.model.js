const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const albumSchema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
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
			},

		],
	},
	{
		timestamps: true,
	}
);


const Album = mongoose.model('Album', albumSchema)
module.exports = Album
