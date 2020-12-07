const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		firstname: {
			type: String,
			required: true,
			trim: true,
		},
		lastname: {
			type: String,
			required: true,
			trim: true,
		},
		username: {
			type: String,
			required: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			trim: true,
		},
		following: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
				autopopulate: true,
			},
		],
		bio: {
			type: String,
			trim: true,
		},
		interestedIn: {
			type: [''],
			required: true,
		},
		avatar: String,
	},
	{
		timestamps: true,
	}
);

userSchema.plugin(require('mongoose-autopopulate'));

export default mongoose.model('User', userSchema);
