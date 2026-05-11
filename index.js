require("dotenv").config();
const express = require("express");
const { dbConfig } = require("./config/db");
const { globalErrorHandler } = require("./utils/globalErrorHandler");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// database connection
dbConfig();

// Routes
app.use("/", require("./route"));

//home route
app.get('/', (req, res) => {
  res.send('SwiftMove Backend API is running...');
});


// Error handling middleware

app.use(globalErrorHandler);
// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
