exprees = require("express");

eobj = exprees();

eobj.listen(5100,function MarvellousWelcome()
{
    console.log("Marvellous Server is ON at port 5100...");
});

function MarvellousAcceptRequest(req,res)
{
    res.send("Marvellous Serevr Connection is Succesful...");
}

eobj.get('/',MarvellousAcceptRequest);