const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname+"/Wiki.html");
});

app.listen(2000, function(){
  console.log("Server started on port 2000");
})
