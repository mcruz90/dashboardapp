const express = require("express");
 
// docsRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /doc.
const docsRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the docs.
docsRoutes.route("/doc").get(function (req, res) {
 let db_connect = dbo.getDb("messages");
 db_connect
   .collection("docs")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you get a single record by id
docsRoutes.route("/doc/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId( req.params.id )};
 db_connect
     .collection("docs")
     .findOne(myquery, function (err, result) {
       if (err) throw err;
       res.json(result);
     });
});
 
// This section will help you create a new record.
docsRoutes.route("/doc/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   doc_name: req.body.doc_mame,
   doc_tag: req.body.doc_tag,

 };
 db_connect.collection("docs").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// This section will help you update a record by id.
docsRoutes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb(); 
 let myquery = { _id: ObjectId( req.params.id )}; 

 let newvalues = {   
  $set: {     
    name: req.body.name,    
    note: req.body.note,  
  },
}; 

  db_connect
  .collection("docs")
  .updateOne(myquery, newvalues, function (err, res) {
    if (err) throw err;
    console.log("1 document updated");
    response.json(res);
  });

});
 
// This section will help you delete a record
docsRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId( req.params.id )};
 db_connect.collection("docs").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = docsRoutes;