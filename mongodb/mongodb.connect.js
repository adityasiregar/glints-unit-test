const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@my-sample-project.lt9no.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    );
  } catch (err) {
    console.error("Error connecting to mongodb");
    console.error(err);
  }
}

module.exports = { connect };
