const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');


app.use(express.urlencoded ({ extended: true }));
app.use(cookieParser()); 
app.use(express.static('public')); //the page of static asset 
app.set("view engine","pug" ); //the page of fillName page


app.get("/", (req,res)=>{
  res.send("Hello, My Server!");
})

app.get('/myName', (req, res) => {
  if( !req.cookies.name ) {
    res.redirect( "/fillName" );
  }else{
    res.send(`Your name is ${req.cookies.name}.`);
  }
});

app.get('/fillName', (req, res) => {
  res.render("index");
});

app.get("/trackName",(req,res) => {
  let name = req.query.name;
  console.log(name);
  res.cookie("name",name);
  res.redirect("/myName");
})

app.get("/clearName",(req,res) => {
  res.clearCookie('name', "cookie");
  res.redirect("/myName");
})

const  dataRoutes = require("./routes");
app.use("/data",dataRoutes);

app.listen(port, () => {
  console.log(`The app is running on port ${port}`)
})