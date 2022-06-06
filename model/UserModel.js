"use strict";
exports.__esModule = true;
exports.UserModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var UserModel = /** @class */ (function () {
    function UserModel() {
        this.createSchema();
        this.createModel();
    }
    UserModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            user_id: { type: String, required: true, unique: true },
            age: Number,
            email: String,
            phone: String
        }, { collection: 'users' });
    };
    UserModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("users", this.schema);
    };
    UserModel.prototype.createUser = function (response, userObject) {
        this.model.insertMany(userObject)
            .then(function (result) { response.json(result); })["catch"](function (err) { response.json(err); });
    };
    UserModel.prototype.getUser = function (response, filter) {
        this.model.findOne(filter)
            .then(function (result) { response.json(result); })["catch"](function (err) { response.json(err); });
    };
    UserModel.prototype.updateUser = function (response, userObject) {
        this.model.replaceOne({ user_id: userObject["user_id"] }, userObject)
            .then(function (result) { response.json(result); })["catch"](function (err) { response.json(err); });
    };
    UserModel.prototype.deleteUser = function (response, userObject) {
        this.model.deleteOne(userObject)
            .then(function (result) { response.json(result); })["catch"](function (err) { response.json(err); });
    };
    return UserModel;
}());
exports.UserModel = UserModel;
