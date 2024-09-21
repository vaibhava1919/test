const express = require("express");
const app = express();
const path = require("path")
const bodyparser = require("body-parser")
const nodemailer = require("nodemailer");
const { log } = require("console");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")


app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/about', (req, res) => {
    res.render('about');
  });

  app.get('/services', (req, res) => {
    res.render('services');
  });

  
  app.get('/contact', (req, res) => {
   
    res.render("contact");
  });

  app.get('/gallary', (req, res) => {
    res.render("gallary");
  });

  app.get('/policy', (req, res) => {
    res.render("policy");
  });

  
  app.get('/terms', (req, res) => {
    res.render("terms");
  });


app.post("/contact",(req,res) => {
  const email = req.body.email;
  const name = req.body.name;
  const add  = req.body.address;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user:"kiranmoversandpackers@gmail.com",
      pass:"kwww vycv smyd uzrp "
    }
  })

  var mailOptions = {

    from:"kiranmoversandpackers@gmail.com",
    to : "req.body.email",
    cc :"kiranmoversandpackers@gmail.com",
    subject:"Query for transport" + name,
    text: "shipping address:"+ add+"," +"phone number-" + email
    
   
  
  };
  transporter.sendMail(mailOptions,function(error, info){
    if(error){
      console.log(error);
      
      
    }else{
      res.redirect("/");
      console.log("email sent" + info.response);
      
    }
  })
  
})



  
app.listen(3002,function(){
    
})