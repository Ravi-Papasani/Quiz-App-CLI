
var readlinesync = require('readline-sync');
const chalk = require('chalk');
 

var userName = readlinesync.question(chalk.blue('What is your name ?'));
var userAnswer = readlinesync.question(chalk.blue('Hello ' + userName + ' ,Do you wan try Cricket quiz?'));


//Total Score 
var score = 0;

if(userAnswer === 'yes'){
console.log(chalk.keyword('orange')('Lets try few questions to test your cricket knowledge! '));
}
else{
  console.log(chalk.green('Thank you ' + userName + ', for visiting my app!'));
}

//Play Function 
 function playQuiz(questions,answers){
  if(userAnswer === 'yes'){
  var userAnswers = readlinesync.question(questions);

  if(userAnswers.toUpperCase() === answers.toUpperCase()){
    console.log(chalk.green('You are Right, correct answer!'));
    score = score + 1;
  }else{
    console.log(chalk.red('Your answer is wrong!'));
  }
  console.log('Your current score is ' + score)
  }
 }

//Array of Objects

var questions = [{
 question: "Which Country host Big Bash League in cricket?",
answer: "Australia"
},{
question: "which country has the second largest cricket ground in the world (Eden Gardens)?",
answer: "India"
},{
question: "Boxing Day Test match is a cricket Test match held in Which Country ?",
 answer: "Australia"
},{
question: "who is universe boss in cicket?",
answer: "Gayle"
},{
question: "which country won the first t20 cricket world cup?",
 answer: "India"
}];

//loops
for(var i=0;i<questions.length;i++){
   var currentQuestion =   questions[i];
playQuiz(currentQuestion.question,currentQuestion.answer);
}

if(userAnswer === 'yes'){
console.log(chalk.bold.green('Your final score is ' + score + ' out of ' + questions.length ));
}

//quiz high scores

//keep data of high score

var userHighScores = [
{
  name: "John",
  score :5 ,
},{
  name: "Scott",
  score : 4,
},{
  name: "Lee",
  score: 3,
}];



//compare current user score with leading user's high scores
if(userAnswer === 'yes' && score != 0){

  for(var j=0;j<userHighScores.length;j++){
    if(score > userHighScores[j].score){
      console.log("Congrates, you are now one of the leading highest scorer crossed " + userHighScores[j].name + " score " +userHighScores[j].score);
    }else if(score === userHighScores[j].score){
      console.log("Congrates, you are now one of the leading highest scorer and leveled " + userHighScores[j].name + " score " +userHighScores[j].score);
    }else{
      console.log("Try this quiz again to be in top one of the three highest scores")
    }
  }
var totalScores = [];
totalScores.push({name:userName,score:score});
console.log('Below are your total score for this Quiz ');
console.log( totalScores);
//totalScores.name = userName;
//totalScores.score = score;
}

