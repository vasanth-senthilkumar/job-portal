const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const mongoose = require('mongoose');

const passport = require("passport");

const app = express();

const PORT = process.env.PORT||4000;

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// routes
var testAPIRouter = require("./routes/testAPI");
var UserRouter = require("./routes/users.routes");
var JobRouter = require("./routes/job.routes");
var ApplicationRouter = require("./routes/application.routes");

app.use(cors());
// Body-Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB

mongoose
  .connect("mongodb+srv://job-portal:EARIaxkNh1vlOyjZ@job-portal.qo3s4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((res) => console.log("Connected to DB"))
  .catch((err) => console.log(err));

// setup API endpoints
app.use("/testAPI", testAPIRouter);
app.use("/user", UserRouter);
app.use("/job", JobRouter);
app.use("/application", ApplicationRouter);

app.listen(process.env.PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
