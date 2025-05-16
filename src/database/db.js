const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Wait connecting to the database...");

  mongoose
    .connect(
      "mongodb+srv://root:proot@cluster0.kuion1c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Atlas connected"))
    .catch((error) => console.log("MongoDB Atlas connection error: ", error));
};

module.exports = connectDatabase;
