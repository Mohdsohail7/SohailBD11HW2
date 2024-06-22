let express = require("express");
let app = express();
let port = 8000;

// Question 1: Send a custom commit message
app.get('/custom-commit', (req, res) => {
  let type = req.query.type;
  let message = req.query.message;

  let result = type + ": " + message;
  res.send(result);
});

// Question 2: Generate certificate for students
app.get('/certificate', (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let courseName = req.query.courseName;

  let courseCertificate = "This certification is awarded to " + firstName + " " + lastName + " " + "for completing the course " + courseName;
  res.send(courseCertificate);
  
});

// Question 3: Configure a custom out-of-office message
app.get('/autoreply', (req, res) =>{
  let startMonth = req.query.startMonth;
  let endMonth = req.query.endMonth;

  let message = "Dear customer, thank you for reaching out to me. Unfortunately, I'm out of office from " + startMonth + " till " + endMonth + ". Your enquiry will be resolved by another collegue.";
res.send(message);
});

// Question 4: Send a secure URL
app.get('/secureurl', (req, res) => {
  let domain = req.query.domain;

  let sendUrl = " https://" + domain;
  res.send(sendUrl);
})  

// Question 5: Send a verification OTP  
app.get('/sendotp', (req, res) => {
  let otpCode = req.query.otpCode;

  let verificationMessage = "Your OTP for account verification is " + otpCode + ". Do not share this with anyone";
  res.send(verificationMessage);
});

// Question 6 : Send a welcome mail to new user
app.get('/welcome', (req, res) => {
  let firstName = req.query.firstName;
  let email = req.query.email;

  let welcomeMessage = " Hey " + firstName + ". We're excited to have you here, we'll send future notifications to your registered mail (" + email + ")";
  res.send(welcomeMessage);
});

// server start here
app.listen(port, () =>{
  console.log("server is Running on port number ", port);
});
