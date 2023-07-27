const router = require("express").Router();
let Email = require("../models/email");

//send email.js route

router.route("/add").post((req,res)=>{

    const { email, date } = req.body;

    const newemail = new Email({
        email,
        date
    })

    newemail.save().then(()=>{
        res.json("Email Added");

    }).catch((err)=>{
        console.log(err);
    })
})

// Get all emails.js

router.get("/fetch", async (req, res) => {
  try {
    const emails = await Email.find({}, { _id: 0, email: 1, date: 1 });
    res.json(emails);
  } catch (err) {
    console.error('Error fetching emails:', err);
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router