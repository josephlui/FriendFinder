
// sample user to populate the array 
var sampleUser = {
    name: "Joseph Lui",
    photo: "sampleUser.jpg",
    scores:  [ '2', '1', '1', '2', '2', '2', '2', '3', '2', '2' ],
}

// array to store all the users
var surveyResult = [
    sampleUser
];

// save survey result
let saveSurvey = function (newUser){

    let result = findMatch (newUser);
    surveyResult.push(newUser);
    return result;


}

// find the matching user
let findMatch = function (newUser){

    let min = 100000000;
    let result = {
        name: surveyResult[0].name,
        photo: surveyResult[0].photo,
    };
    surveyResult.forEach(user =>{
        questions = user.scores;
        total = 0;
        for (var i = 0; i < questions.length; i++){
            total += Math.abs(questions[i] - newUser.scores[i]);     
        }
        if (min > total ){
            min = total;
            result = { name: user.name, photo: user.photo };
        }   
    });
    
    return result;
}


// return survey
let getSurvey = function () {
    return surveyResult;
}

module.exports = { add: saveSurvey , get: getSurvey};