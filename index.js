//importing 
var chalk = require('chalk');
var readline = require('readline-sync');

//greeting
console.log(chalk.bgYellow.bold.black('Welecome To Dragon Ball Z Quiz\n'));

if(!readline.keyInYN((chalk.bgGreen.bold.black('Hi, Fighter or Earth Saver. The Earth need Your Help. Are you ready for a great adventure !')))){
  console.log(chalk.bgRed.bold.black('\nNo Problem ! See You Soon'))
  process.exit();
}

var nickName = readline.question(chalk.bgGreen.bold.black('\nGreat, So what should we call you:'))

console.log(chalk.bgCyan.bold.black('\nHi ')+chalk.bgCyan.bold.white(nickName.toUpperCase())+chalk.bgCyan.bold.black(' Thank you for helping us.\nWe need your help in, selecting the Z warriors which will have the high chance of winning the battle.'))

//Questions
var score = 0;

ques1 = {
  question:'\nQ:Raditz has kidnapped Gohan,Select the best pair of Z Fighter who have high chanches of winning ?',
  options:['Goku & Piccolo','Goku & Yamcha','Tien & Goku','Tien & Goku'],
  answer:'0'
}
ques2 = {
  question:'\nQ:Vegeta is destroying The Earth, Choose the best fighter that the Earth can offer to stop him ?',
  options:['Piccolo','Goku','Tien','Gohan'],
  answer:'1'
}
ques3 = {
  question:'\nQ:Nappa wants a 2 on 1 fight, Select the best pair of Z Fighter who have high chanches of winning ?',
  options:['Piccolo & Gohan','Yamcha & Piccolo','Tien & Gohan','Tien & Yamcha'],
  answer:'0'
}
ques4 = {
  question:'\nQ:Cell has started the tournament, Select the best Fighter who have high chanches of winning ?',
  options:['Goku','Vegeta','Gohan','Trunks'],
  answer:'2'
}
ques5 = {
  question:'\nQ:Kid Buu is unleashed, Select the best pair of Z Fighter who have high chanches of winning ?',
  options:['Goku & Piccolo','Goku & Gohan','Vegeta & Goku','Trunks & Vegeta'],
  answer:'2'
}

//Play function that accpt ques, options, answer as parameter
function playFunc(ques,opt,ans){
  console.log(chalk.blue('\n------------------------------------------------------------------------------------------------------------------------------------------------------------------------------'))
  console.log(chalk.red(ques))
  currAns = readline.keyInSelect(opt,chalk.blue.bold('Select Your Option'));

  if(currAns == ans){
    score++;
    console.log(chalk.black.bold.bgGreen('\nCorrect'))
  }
  else{
    score--;
    console.log(chalk.black.bold.bgRed('\nWrong'))
  }
  console.log(chalk.blue.bold('\nYour Score is : '+score));

}
// Question array and call the question using for loop
var questionArray = [ques1,ques2,ques3,ques4,ques5];

for(var i=0;i<questionArray.length;i++){
  var currQues = questionArray[i];
  playFunc(currQues.question, currQues.options, currQues.answer);
}
console.log(chalk.blue('\n------------------------------------------------------------------------------------------------------------------------------------------------------------------------------'))
console.log((chalk.bgCyan.bold.black('\nWell Done ')+chalk.bgCyan.bold.white(nickName.toUpperCase())+chalk.bgCyan.bold.black(' Your Final Score Is : ')+chalk.bgCyan.bold.white(score)))
console.log(chalk.blue('\n------------------------------------------------------------------------------------------------------------------------------------------------------------------------------'))

//Checking the highscore
var highScore = [{ name : 'Sunny',
points : 5},{name : 'Goku', points : 4},{ name : 'Tony', points : 3}]

if (score >= highScore[0].points)
{
  console.log(chalk.bgYellow.bold.black('Congrats, You are the HighScorer. Please take the ScreenShot and send it to me'));
}

console.log(chalk.bgYellow.bold.black('ThankYou For Playing'));
console.log(chalk.bgGreen.bold.black('\nBefore you go check out the HighScores :-'));

for(var i = 0; i<highScore.length;i++)
{
  console.log(' '+highScore[i].name,highScore[i].points);
}