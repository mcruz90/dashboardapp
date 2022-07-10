const fs = require("fs");


fs.readdirSync("./src/server/uploads/").forEach(file => {
    //Print file name
    console.log(file)

    /*
    Run this to print the file contents
    console.log(readFileSync(".levels/" + file, {encoding: "utf8"}))
    */
})

//but if your goal is just to print the file name you can do this
//Sfs.readFileSync("./src/server/uploads/").forEach(console.log)