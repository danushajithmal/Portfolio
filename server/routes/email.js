const router = require("express").Router();
let Email = require("../models/email");

router.route("/add").post((req,res)=>{

    const email = req.body.email;

    const newemail = new Email({
        email
    })

    newemail.save().then(()=>{
        res.json("Email Added");

    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router