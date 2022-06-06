"use strict";
exports.__esModule = true;
exports.ItemModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var ItemModel = /** @class */ (function () {
    function ItemModel() {
        this.createSchema();
        this.createModel();
    }
    ItemModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            item_id: Number,
            category_id: Number,
            item_name: String,
            item_number_of_votes: Number,
            item_percent_of_votes: Number,
            item_rank: Number
        }, { collection: 'items' });
    };
    ItemModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("items", this.schema);
    };
    ItemModel.prototype.retrieveAllItemsfromUniqueCategory = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    ItemModel.prototype.retrieve10mostvoted = function (response) {
        var query = this.model.find({});
        query.sort({ "item_number_of_votes": -1 });
        query.limit(10);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    ItemModel.prototype.updateVote = function (response, filter) {
        this.model.findOneAndUpdate({ "item_id": filter }, { $inc: { item_number_of_votes: 1 } }, { "new": true }, function (err, itemArray) {
            response.json(itemArray);
        });
    };
    ItemModel.prototype.retrieveRandomQuestion = function (response) {
        var num_items = 20;
        var randomnum1 = Math.floor(Math.random() * num_items) + 1;
        var randomnum2 = Math.floor(Math.random() * randomnum1) + 1;
        if (randomnum1 == randomnum2) {
            randomnum2++;
            if (randomnum2 > num_items) {
                randomnum2 = 1;
            }
        }
        var query = this.model.find({ $or: [{ "item_id": randomnum1 }, { "item_id": randomnum2 }] });
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    ItemModel.prototype.retriveDailyQuestion = function (response) {
        var query = this.model.find({ $or: [{ "item_id": 5 }, { "item_id": 10 }] });
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    ItemModel.prototype.retrieveAllItems = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    ItemModel.prototype.retrieveOneItem = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return ItemModel;
}());
exports.ItemModel = ItemModel;
