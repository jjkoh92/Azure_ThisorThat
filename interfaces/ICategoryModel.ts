import Mongoose = require("mongoose");

interface ICategoryModel extends Mongoose.Document {
    category_id : number;
    category_name: string;
    items : [ {
        item_id: number;
    }];
}
export {ICategoryModel};