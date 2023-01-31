const mongose = require("mongoose");
const schema = mongose.Schema;
const ObjectId = schema.ObjectId;

const create_order = new schema({
    customer_id:
    {type:String,
        required:true},
    inventory_id:
    {type:String,
         required:true},
    item_name:
    {type:String, 
        required:true},
    quantity: 
    {type:mongose.Schema.Types.ObjectId, ref:"inventory_table"}
    
});

const order_table = mongose.model("order", create_order);
module.exports = order_table;