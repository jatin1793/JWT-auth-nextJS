const mongoose = require('mongoose')

const User = new mongoose.Schema(
	{
		token: { type:String, default:""},
		email: { type: String, required: true, unique: true },
		name: { type: String, required: true },
		username: { type: String, required: true},
		password: { type: String, required: true },
	},
)

module.exports = mongoose.model('UserData', User);

