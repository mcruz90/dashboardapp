const express = require("express");
const fileUpload = require('express-fileupload')
const app = express();
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Specify database routes
app.use(require("./routes/record"));
app.use(require("./routes/docs"));
app.use(require("./routes/sched"));
app.use(require("./routes/contact"));

// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});

// file-upload server
app.use(fileUpload());

app.post('/uploads', (req,res) => {
  if(req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded'});
  }

  const file = req.files.file;

  file.mv(`${__dirname}/uploads/${file.name}`, err => {
    if(err) {
      console.error(err);

      return res.status(500).send(err);
    }
    res.json({fileName: file.name, filePath: `/uploads/${file.name}`})
  })
});

app.listen(7000, () => {
  console.log('Fileupload Server started')
})