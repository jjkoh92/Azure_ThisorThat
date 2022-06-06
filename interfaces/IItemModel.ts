import Mongoose = require("mongoose");

interface IItemModel extends Mongoose.Document {
    item_id: number;
    category_id: number;
    item_name: string;
    item_number_of_votes: number;
    item_percent_of_votes: number;
    item_rank: number;
    link: string;
}
export {IItemModel};
