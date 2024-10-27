//CODE FOR SERVER CONNECTION
require("dotenv").config();
const URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
const mongoose = require("mongoose")
const express = require("express");
const app = express();
const router = require("./router/staticRouter");

app.use(express.json());
app.use("/", router);

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected successfully to DB");
    } catch (error) {
        console.error("Database Connection Failed", error);
        process.exit(1);
    }
};

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
});



