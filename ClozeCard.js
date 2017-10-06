var inquirer = require("inquirer");
var clozeQuestions = require("./questions.json");
var counter = 0;
var correctAnswers = 0;

function ClozeCard(cloze, partial){
  this.cloze = cloze;
  this.partial = "..." + partial;
  this.fullText = [cloze] + " " +partial;
  this.returnCloze = function(){
    console.log("Answer: " + this.cloze);
};
  this.returnPartial = function(){
  console.log(this.partial);
};
  this.returnFullText = function(){
  console.log(this.fullText);

};

};

var askQuestions = function (){

  if(counter < 6){

  inquirer.prompt([

    {type: "input",
      message: "" + clozeQuestions[counter].partial,
      name: "question"
      }
 ]).then(function(answer){

  var userInput = answer.question.toLowerCase();

    if(userInput === clozeQuestions[counter].cloze){
          console.log("\nGreat!");
          correctAnswers++;
        }

        else{
          console.log("\nWrong!");
        }

  console.log(clozeQuestions[counter].fullAnswer);
  counter++
  askQuestions();

  });
} 

else{
  console.log("\nGame Over!")
  console.log("Correct Answers: " + correctAnswers);
  inquirer.prompt([

      {type: "confirm",
        message: "Do you want to play again?",
        name: "playAgain",
        default: true
        }
    ]).then(function(answer){

      if (answer.playAgain === true){
        counter = 0;
        correctAnswerCount = 0;
        askQuestions();

      }
      else{
        console.log("Hope you had a good game!!");
      }

  });
}

}; //closing function

askQuestions();

 var questionA = new BasicCard("Who was the first president of the United States?", "George Washington" );
 var questionB = new BasicCard("Who was the third president of the United States?", "Thomas Jefferson");
 var questionC = new BasicCard("Who was the fifth president of the United States?", "James Monroe" );
 var questionE = new BasicCard("What was Abraham Lincoln before he became president?", "Lawyer" );
 var questionF = new BasicCard("Who was the first president who live in the White House?", "John Adams");
 var questionG = new BasicCard("Who was the first president who own an automobile?", "William Howard Taft" );

module.exports = BasicCard;

