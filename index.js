const express = require("express");
const app = express();
app.use(express.json());


function ticketChecker(req,res,next){
    const ticket = req.query.ticket;
    if(ticket =="free"){
        next();
    }
    else{
        res.status(403).send("Access denied");
    }
}

app.use(ticketChecker);


app.get("/ride1",function(){
    
})