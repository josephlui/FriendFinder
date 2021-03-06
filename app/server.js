// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
let htmlRoute = require("./routing/htmlRoutes");
let apiRoute = require("./routing/apiRoutes");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

// api routes
apiRoute(app);

// html routes
htmlRoute(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});



