const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const contactRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
contactRoutes.route("/contact").get(function (req, res) {
 let db_connect = dbo.getDb("messages");
 db_connect
   .collection("contacts")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you get a single record by id
contactRoutes.route("/contact/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId( req.params.id )};
 db_connect
     .collection("contacts")
     .findOne(myquery, function (err, result) {
       if (err) throw err;
       res.json(result);
     });
});
 
// This section will help you create a new record.
contactRoutes.route("/contact/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   name: req.body.name,
   company: req.body.company,
   position: req.body.position,
   phone: req.body.phone,
   email: req.body.email
 };
 db_connect.collection("contacts").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// This section will help you update a record by id.
contactRoutes.route("/editcontact/:id").post(function (req, response) {
 let db_connect = dbo.getDb(); 
 let myquery = { _id: ObjectId( req.params.id )}; 

 let newvalues = {   
  $set: {
    name: req.body.name,
    company: req.body.company,
    position: req.body.position,
    phone: req.body.phone,
    email: req.body.email 
  },
}; 

  db_connect
  .collection("contacts")
  .updateOne(myquery, newvalues, function (err, res) {
    if (err) throw err;
    console.log("1 document updated");
    response.json(res);
  });

});
 
// This section will help you delete a record
contactRoutes.route("/contact/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId( req.params.id )};
 db_connect.collection("contacts").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 contact deleted");
   response.json(obj);
 });
});
 
module.exports = contactRoutes;