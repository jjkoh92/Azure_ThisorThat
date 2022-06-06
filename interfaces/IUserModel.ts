import Mongoose = require("mongoose");

interface IUserModel extends Mongoose.Document {
    user_id: {type: String, required: true, unique: true},
    age: Number,
    email: String,
    phone: String
}
export {IUserModel};
