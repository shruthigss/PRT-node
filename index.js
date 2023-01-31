const express = require("express")
const app = express();
const customer = require("./modules/create_customer");
const order = require("./modules/create_order");
const inventory = require("./modules/create_inventry");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const port = 3005;
const url = "mongodb://localhost:27017/prt";
mongoose.set('strictQuery', true)

mongoose.connect(url);
const db = mongoose.connection

db.on("error",(err)=>{
    console.log(err);
})
db.once("open", ()=>{
    console.log("db connected");
})

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

let order_data = [];
app.post("/createorders",async(req,res)=>{
    try{
        let user = order_data.push(order.insertMany({
            customer_id:req.body.customer_id,
            inventory_id:req.body.inventory_id,
            item_name:req.body.item_name,
            quantity:req.body.quantity
        }))
        res.json({
            status:"success",
            user
        })
    }
    catch(e){
        console.log(e.message);
        res.json({
            message:e.message,
            status:"Failure"
        })
    }
});

let inventory_data =[];
app.post("/createInventory",async(req,res)=>{
    try{
        let user = inventory_data.push(inventory.insertMany({
            Inventory_id:req.body.Inventory_id,
            inventory_type:req.body.inventory_type,
            Item_name:req.body.Item_name,
            Available_quantity:req.body.Available_quantity
        }))
        res.json({
            status:"success",
            user
        })
    }
    catch(e){
        console.log(e.message);
        res.json({
            message:e.message,
            status:"Failure"
        })
    }
});


let customer_data = [];
app.post("/createCustomer",async(req,res)=>{
    try{
        let user = customer_data.push(customer.insertMany({
            customer_id:req.body.customer_id,
            customer_name:req.body.customer_name,
            email:req.body.email
        }))
        res.json({
            status:"success",
            user
        })
    }
    catch(e){
        console.log(e.message);
        res.json({
            message:e.message,
            status:"Failure"
        })
    }
});

app.get("/order", async(req,res)=>{
    try{
        const user = await order.find();
        res.json({
            status:"success",
            user
        });
    }
    catch(e){
        res.status(400).json({
            status:"Failure",
            message:e.message
        });
    }
});

app.get("/inventory", async(req,res)=>{
    try{
        const user = await inventory.find();
        res.json({
            status:"success",
            user
        });
    }
    catch(e){
        res.status(400).json({
            status:"Failure",
            message:e.message
        });
    }
});

app.get("/customerDetails", async(req,res)=>{
    try{
        const user = await customer.find();
        res.json({
            status:"success",
            user
        });
    }
    catch(e){
        res.status(400).json({
            status:"Failure",
            message:e.message
        });
    }
});

app.get("/inventory/inventoryType", async(req,res)=>{
    try{
        const user = await inventory.findOne(req.body);
        res.json({
            status:"success",
            user
        });
    }
    catch(e){
        res.status(400).json({
            status:"Failure",
            message:e.message
        });
    }
});

app.get("/itemName/availableQuantity", async(req,res)=>{
    try{
        const user = await inventory.findOne(req.body);
        res.json({
            status:"success",
            user
        });
    }
    catch(e){
        res.status(400).json({
            status:"Failure",
            message:e.message
        });
    }
});


app.listen(port,()=>{
    console.log("port 3005 is running")
})