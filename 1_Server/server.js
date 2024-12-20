exprees = require("express");

eobj = exprees();

port = 5100;

function MarvellousWelcome()
{
    console.log("Marvellous Server is ON at port 5100...");
}

eobj.listen(port,MarvellousWelcome);

function MarvellousAcceptRequest(req,res)
{
    res.send("Marvellous Serevr Connection is Succesful...");
}

eobj.get('/',MarvellousAcceptRequest);

function MarvellousBatches(req,res)
{
    res.send("We have PPA,ANgular,Python,LB");
}

eobj.get('/Batches',MarvellousBatches);

function MarvellousLocation(req,res)
{
    res.send("Location of Marvellous is Kothrud Pune");
}

eobj.get('/Location',MarvellousLocation);

function MarvellousBatchDeatails(req,res)
{
    res.json({"Batch":"PPA","Fees":21000,"Duration":"3 Months"});
}

eobj.get('/GetBatchDet',MarvellousBatchDeatails);