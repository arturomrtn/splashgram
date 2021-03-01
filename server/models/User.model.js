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

userSchema.plugin(require('mongoose-autopopulate'));

const User = mongoose.model('User', userSchema)
module.exports = User
