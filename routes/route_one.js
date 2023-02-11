const express = require("express");
const router = express.Router();
const scanner= require('../modules/scanner')


// GET requests
router.get("/", async (req, res) => {
    let data = req.query
    try {
       // try stuff
       res.type('text/plain');
       res.status(404);
       res.send('404 - Not Found');
      } catch (error) {
        // catch errors
        res.status(500);
        res.send(error);
      }

})






// POST requests
router.post("/scan", async (req, res) => {
    let data = req.body;
    let phrase= data.phrase

    try {
       let payload=await scanner.run(phrase);
       res.send(payload)
       } catch (error) {
         // catch errors
         res.status(500);
         res.send(error);
       }
 

})


module.exports = router;