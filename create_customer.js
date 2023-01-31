const mongose = require("mongoose");
const schema = mongose.Schema;
const objectId = schema.objectId;

const create_customer = new schema({
    customer_id:
               {type:String},
    customer_name:
    {type:String,
         required:true},
    email:
    {type:String, 
        required:true, unique:true}
});

const customer_table = mongose.model("customer", create_customer);
module.exports = customer_table;