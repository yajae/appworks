const express = require('express');
const app = express();
const port = 3000;

app.get('/home', (req, res) => {
    res.send("index");
});

app.get('/member', (req, res) => {
    res.send("welcome~!");
});







app.listen(port, () => {
    console.log(`The app is running on port ${port}`)
  })