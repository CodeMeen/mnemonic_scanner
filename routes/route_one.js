const express = require("express");
const router = express.Router();


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


router.get("/:reqtype", async (req, res) => {
    let reqtype=req.params.reqtype;
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
router.post("/", async (req, res) => {
    let data = req.body;
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


router.post("/:reqtype", async (req, res) => {
    let reqtype = req.params.reqtype;
    let data = req.body;


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


module.exports = router;