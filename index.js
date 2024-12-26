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

function isOldEnough(age){
    if(age>14){
        return true;
    }
    else{
        false;
    }
}


//Middle ware for the Old enough 

function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age;
    console.log(age);
    if(age >=14){
        next();
    }
    else{
        res.json({
            msg : "You are not of enough age"
        })
    }
}

app.get("/ride1",isOldEnoughMiddleware , function(req,res){
    res.json({
        msg : "You have successfully riden the ride 1"
    })
});



app.get("/ride2",isOldEnoughMiddleware,function(req,res){
 res.json({
    msg : "You have successfully ride the ride 2"
 });
});


app.listen(3000);