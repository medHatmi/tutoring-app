const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoute = require('./routes/user');
const profileRoute = require('./routes/profile');
const ConversationRoute = require('./routes/conversations');
const MessageRoute = require('./routes/messages');
const MailRoute = require('./routes/mailer');
const LevelRoute = require('./routes/levels');
const Cors = require('cors')
const mongoose = require("mongoose");

require('dotenv').config()


mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true},
    () => {
      console.log("Connected to MongoDB");
    }
);


app.use(Cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(express.static('uploads'))



app.use("/user", userRoute);
app.use("/profile", profileRoute);
app.use("/conversation", ConversationRoute);
app.use("/message", MessageRoute);
app.use("/mail", MailRoute);
app.use("/level", LevelRoute);





app.listen(8800, () => {
    console.log("Backend server is running!");
  });



module.exports = app;



