
var readlinesync = require('readline-sync');
const chalk = require('chalk');
 

var userName = readlinesync.question(chalk.blue('What is your name ?'));
var userAnswer = readlinesync.question(chalk.blue('Hello ' + userName + ' ,Do you know Ravi ?'));


//Total Score 
var score = 0;

if(userAnswer === 'yes'){
console.log(chalk.keyword('orange')('Try few questions to know more about Ravi! '));
}
else{
  console.log(chalk.green('Hi ' + userName + ', You can Connect with Ravi on Twitter/Linkedin, to know about him @ravipapasani/Ravi Teja Papasani !'));
}

//Play Function 
 function playQuiz(questions,answers){
  if(userAnswer === 'yes'){
  var userAnswers = readlinesync.question(questions);

  if(userAnswers.toUpperCase() === answers.toUpperCase()){
    console.log(chalk.green('You are Right!'));
    score = score + 1;
  }else{
    console.log(chalk.red('You are Wrong!'));
  }
  console.log('Your current score is ' + score)
  }
 }

//Array of Objects

var questions = [{
 question: "Which state Ravi stay currently in US?",
answer: "Texas"
},{
question: "Which Tech Company Ravi like most?",
answer: 'Microsoft'
},{
question: "Which Company Ravi works for?",
 answer: "FedEx"
},{
question: "Who is Ravi's favorite Tv Host?",
answer: "Trevor"
},{
question: "What is Ravi's last name?",
 answer: "Papasani"
}];

//loops
for(var i=0;i<questions.length;i++){
   var currentQuestion =   questions[i];
playQuiz(currentQuestion.question,currentQuestion.answer);
}

if(userAnswer === 'yes'){
console.log(chalk.bold.green('Your final score is ' + score + ' out of ' + questions.length ));
}

//data of high scores
if(userAnswer === 'yes' && score != 0){
var totalScores = [];
totalScores.push({name:userName,score:score});
console.log('Below are your total score for this Quiz ');
console.log( totalScores);
//totalScores.name = userName;
//totalScores.score = score;
}

