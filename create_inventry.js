const mongose = require("mongoose");
const schema = mongose.Schema;
const ObjectId = schema.ObjectId;

const create_inventory = new schema({
    Inventory_id:
               {type:String},
    inventory_type:
    {type:String,
         required:true},
    Item_name:
    {type:String, 
        required:true},
    Available_quantity:
    {type:Number, 
        required:true,}
});

const inventory_table = mongose.model("inventory", create_inventory);
module.exports = inventory_table;