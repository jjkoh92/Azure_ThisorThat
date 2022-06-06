"use strict";
exports.__esModule = true;
exports.CategoryModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var CategoryModel = /** @class */ (function () {
    function CategoryModel() {
        this.createSchema();
        this.createModel();
    }
    CategoryModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            category_id: Number,
            category_name: String,
            items: [{
                    item_id: Number
                }]
        }, { collection: 'categories' });
    };
    CategoryModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("categories", this.schema);
    };
    CategoryModel.prototype.retrieveAllCategories = function (response) {
        var query = this.model.find({});
        query.exec(function (err, CategoryArray) {
            response.json(CategoryArray);
        });
    };
    CategoryModel.prototype.retrieveCategoryCount = function (response) {
        console.log("retrieve Category Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec(function (err, numberOfCategories) {
            console.log("number Of Categories: " + numberOfCategories);
            response.json(numberOfCategories);
        });
    };
    return CategoryModel;
}());
exports.CategoryModel = CategoryModel;
