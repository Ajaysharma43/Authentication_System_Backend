const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const ejs = require("ejs");
const router = express.Router();
const Users = require("../Schemma/UserSchemma");

const app = express();

app.set("view engine", "ejs");
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.post("/Signup", async (req, res) => {
  const Username = req.body.username;
  const Password = req.body.password;
  const Email = req.body.email;
  const finduser = await Users.findOne({ Email: Email });
  if (finduser) {
    res.send("existed");
  } else {
    const dataset = { Username: Username, Password: Password, Email: Email };
    const datasave = new Users(dataset);

    const save = await datasave.save();

    console.log(save);
    res.send("created")
  }
});

router.post('/Login',async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const findUser = await Users.findOne({Username:username,Password:password,Email:email})
    if(findUser)
    {
        res.send('authorized')
    }
    else{
        res.send('unauthorized')
        console.log("unauthorized");
    }
})

module.exports = router;
