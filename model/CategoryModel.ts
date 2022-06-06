import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {ICategoryModel} from "../interfaces/ICategoryModel";


let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class CategoryModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                category_id : Number,
                category_name: String,
                items : [ {
                    item_id: Number,
                }],
            }, {collection: 'categories'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ICategoryModel>("categories", this.schema);
    }

    public retrieveAllCategories(response:any): any {
        var query = this.model.find({});
        query.exec( (err, CategoryArray) => {
            response.json(CategoryArray);
        });
    }

    public retrieveCategoryCount(response:any): any {
        console.log("retrieve Category Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec( (err, numberOfCategories) => {
            console.log("number Of Categories: " + numberOfCategories);
            response.json(numberOfCategories);
        });
    }
}
export {CategoryModel};