const express = require("express");
 
// docsRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /doc.
const schedRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the docs.
schedRoutes.route("/sched").get(function (req, res) {
 let db_connect = dbo.getDb("messages");
 db_connect
   .collection("sched")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you get a single record by id
schedRoutes.route("/sched/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId( req.params.id )};
 db_connect
     .collection("sched")
     .findOne(myquery, function (err, result) {
       if (err) throw err;
       res.json(result);
     });
});
 
// This section will help you create a new record.
schedRoutes.route("/sched/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
    time: req.body.time,
    title: req.body.title,
    subtitle: req.body.subtitle,
    resource: req.body.resource
 };
 db_connect.collection("sched").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// This section will help you update a record by id.
schedRoutes.route("/schedupdate/:id").post(function (req, response) {
 let db_connect = dbo.getDb(); 
 let myquery = { _id: ObjectId( req.params.id )}; 

 let newvalues = {   
  $set: {    
    time: req.body.time,
   title: req.body.title,
   subtitle: req.body.subtitle,
   resource: req.body.resource
  },
}; 

  db_connect
  .collection("sched")
  .updateOne(myquery, newvalues, function (err, res) {
    if (err) throw err;
    console.log("1 document updated");
    response.json(res);
  });

});
 
// This section will help you delete a record
schedRoutes.route("/sched/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId( req.params.id )};
 db_connect.collection("sched").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 sched deleted");
   response.json(obj);
 });
});
 
module.exports = schedRoutes;