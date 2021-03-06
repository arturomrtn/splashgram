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
			type: [String] ,
			required: true,
		},
		avatar: String,
	},
	{
		timestamps: true,
	}
);


const User = mongoose.model('User', userSchema)
module.exports = User
