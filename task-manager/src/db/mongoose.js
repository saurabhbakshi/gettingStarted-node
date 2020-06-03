const mongoose = require("mongoose");

const User = require("../models/user");

const url = "mongodb://127.0.0.1:27017/tm-api";

mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true });
