var path = require("path");
let friend = require ('../data/friends');


let getRoute = function(app){

    app.get("/api/friends", function(req, res) {
        return res.json(friend.get());
    });

    app.post("/api/friends", function(req, res) {
    
       
        return res.json(friend.add(req.body));
       
    });

}

module.exports = getRoute;
