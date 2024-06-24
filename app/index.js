const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.send("working!");
});

const db = require("./models");
const Role = db.role;

db.sequelize.sync();

// set port, listen for requests
const PORT = process.env.PORT || 3000;

// routes
require("./routes/auth.route")(app);
require("./routes/user.route")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
