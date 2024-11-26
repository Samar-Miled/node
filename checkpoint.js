console.log("hello world");
const http= require("http")
const server=http.createServer(req,res)=>{
    res.writeHead(200,{})






const fs= require(`fs`);
fs.writeFile(`welcome.txt`, `hello node`,(err)=>{

})



var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'samarmiled864@gmail.com',
    pass: 'frrr kkj oop'
  }
});

var mailOptions = {
  from: 'samarmiled864@gmail.com',
  to: 'hellmi.khiari@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


function greatUser(username, callback){
    callback(username)
    }
    function morningGretting(username){
        console.log(`good morning ${username}`);
    callback(username)
    }
    function eveningGreeting(username){
        console.log(`good evening  ${username}`);
    }
    greatUser("Samar", morningGretting)
    greatUser("Samar", eveningGreeting)