// express = require("express");
// eobj = express();
// port = 5100;

// ///////////////////////////////////
// function MarvellousWelcome()
// {
//     console.log("Marvellous Server is ON..");    
// }

// eobj.listen(port,MarvellousWelcome);

// //////////////////////////////////

// function MarvellousGet(req,res)
// {
//     res.send("Marvellous Server is Running");
// }

// eobj.get('/',MarvellousGet);
// //////////////////////////////////

// function MarvellousGetBatches(req,res)
// {
//     res.json({"Batch":"PPA","Fees":21000,"Duration":"3 Months"});    
// }

// eobj.get('/getBatches',MarvellousGetBatches);

// //////////////////////////////////////
// // Handling CORS

// eobj.use((req,res,next)=>{
//     res.header("Access-Control-Allow-Origin","http://localhost:4200/");

//     res.header("Access-Control-Allow-Headers","Origin,X-Requested-with,Content-Type,Access");
//     next();
// })

const express = require('express'); // Properly declare and import Express
const cors = require('cors'); // Import CORS for handling cross-origin requests

const eobj = express();
const port = 5100;

// Handling CORS
eobj.use(cors({ origin: 'http://localhost:4200' })); // Use the CORS middleware for better flexibility

///////////////////////////////////
// Function to indicate server startup
function MarvellousWelcome() {
  console.log('Marvellous Server is ON..');
}

// Start the server
eobj.listen(port, MarvellousWelcome);

///////////////////////////////////
// Route to serve a basic message
function MarvellousGet(req, res) {
  res.send('Marvellous Server is Running');
}

eobj.get('/', MarvellousGet);

///////////////////////////////////
// Route to serve batch information
function MarvellousGetBatches(req, res) {
  res.json({ Batch: 'PPA', Fees: 21000, Duration: '3 Months' });
}

eobj.get('/getBatches', MarvellousGetBatches);
