const express = require("express");
const router = express.Router();

router.get("/",(req,res) => {
    let number=req.query.number;
    if(!number) {
        res.send("Lack of Parameter!");
    }else if(isNaN(Number(number))||Number(number)<1) {
        res.send("Wrong Parameter");
    }else{
        let result = 0;
        for(let i=1; i <= number; i++) {
            result += i;
        }
        console.log(`${result}`);
        res.send( `result is ${result}` );
    }
    
})

module.exports=router;