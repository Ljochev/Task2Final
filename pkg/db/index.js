const mongoose = require("mongoose");

const { getSection } = require("../config/index");
const { MONGO_USERNAME, MONGO_PASSWORD} = getSection("development");

const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.coopvs9.mongodb.net/semos?retryWrites=true&w=majority&appName=Cluster0`;

const connect = async () => {
    // console.log(uri);
try {
await mongoose.connect(uri);
console.log("Mongoose is connected with mongoDB");
} catch (err) {
    console.error(err.message);
}
};

connect();