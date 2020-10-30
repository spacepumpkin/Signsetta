const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const cards = require("./routes/api/cards");
const categories = require('./routes/api/categories');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello Olive")
});


app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/categories", categories);
app.use("/api/users", users);
app.use("/api/cards", cards);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

const cors = require("cors");
app.use(cors());
