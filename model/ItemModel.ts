import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IItemModel} from '../interfaces/IItemModel';
import { STATUS_CODES } from "http";

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class ItemModel {
    public schema:any;
    public innerSchema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                item_id: Number,
                category_id: Number,
                item_name: String,
                item_number_of_votes: Number,
                item_percent_of_votes: Number,
                item_rank: Number,
            }, {collection: 'items'}
        );
    }
    public createModel(): void {
        this.model = mongooseConnection.model<IItemModel>("items", this.schema);
    }
    
    public retrieveAllItemsfromUniqueCategory(response:any, filter:Object){
        var query = this.model.find(filter);
        query.exec((err,itemArray)=>{
            response.json(itemArray)
        });
    }
    public retrieve10mostvoted(response:any){
        var query = this.model.find({});
        query.sort({"item_number_of_votes": -1});
        query.limit(10);
        
        query.exec((err,itemArray)=>{
            response.json(itemArray)
        });
    }

    public updateVote(response:any, filter:Object){
        this.model.findOneAndUpdate({"item_id": filter}, {$inc:{item_number_of_votes: 1}},{new: true}, 
        function(err, itemArray) { 
            response.json(itemArray)
        });
    }

    public retrieveRandomQuestion(response:any){
        const num_items = 20
        var randomnum1 = Math.floor(Math.random() * num_items) + 1;
        var randomnum2 = Math.floor(Math.random() * randomnum1) + 1;
        if (randomnum1 == randomnum2) {
            randomnum2++;
            if (randomnum2 > num_items) {
                randomnum2 = 1;
            }
        }
        var query = this.model.find({$or:[{"item_id": randomnum1}, {"item_id": randomnum2}]});
        query.exec((err,itemArray)=>{
            response.json(itemArray)
        });
    }

    public retriveDailyQuestion(response:any){
        var query = this.model.find({$or:[{"item_id": 5}, {"item_id": 10}]})
        query.exec((err,itemArray)=>{
            response.json(itemArray)
        });
    }

      
    public retrieveAllItems(response:any){
        var query = this.model.find({});
        query.exec((err,itemArray)=>{
            response.json(itemArray)
        });
    }

    public retrieveOneItem(response:any, filter:Object){
        var query = this.model.findOne(filter);
        query.exec((err,itemArray) =>{
            response.json(itemArray)
        });
    }
}
export {ItemModel};