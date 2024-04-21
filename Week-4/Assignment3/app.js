const express = require('express');
const app = express();
const port = 3000;
const { createMember, checkMail, checkAll } = require("./mysql.js");
const path = require('node:path'); 
const bodyParser = require("body-parser");


// parse application/json
app.use(bodyParser.json())
app.use(express.urlencoded ({ extended: true })); //可分析body資料格式，如json格式、x-www-form-urlencoded格式
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "pug");//the page of home




app.get('/home', (req, res) => {
    res.render("index");
});

app.post('/signupForm', async function (req, res) {
    try{
        const { email, password } = req.body;
        const data = await checkMail( email);
        if (data){
            res.send({"message": "The email has been signup"});
        }else {
        const data1 = await createMember( email, password );
        res.redirect("/member");
        }
    }catch(error) {
        console.log(error);
    }  
})

app.post('/signinForm', async function (req, res) {
    try{
        const { email, password } = req.body;
        const data = await checkAll( email, password );
        if (!data || data.length == 0) {
            res.send({"message": "the email or password is wrong "})
            throw new Error("No data received from database");
        }else {
            res.redirect("/member");
        }
        
    }catch(error) {
        console.log(error);
    }  
})



app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something wrong~~~");
})


app.get('/member', (req, res) => {
    res.send("welcome~You success signup/signin!");
});







app.listen(port, () => {
    console.log(`The app is running on port ${port}`)
  })