var path = require("path");

let getRoute = function(app){

    // return survey.html 
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });


    // return home.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });



   
}

module.exports = getRoute;
