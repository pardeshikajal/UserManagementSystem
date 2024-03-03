const mongoose = require("mongoose");
// Connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/UserManagementSystem', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    // Explicitly create the database if it doesn't exist
    mongoose.connection.db.createCollection('employee', function (err, result) {
      if (err) {
        console.error("Error creating database:", err);
      } else {
        console.log("Database created");
      }
    });

    console.log("Connected to Database");
  })
  .catch((err) => {
    console.error("Error in Connecting to Database:", err);
  });


