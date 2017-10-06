
var inquirer = require("inquirer");
var basicQuestions = require("./basicQuestions.json");
var counter = basicQuestions.length;
var correctAnswers = 0;

var BasicCard = function(frontSide, backSide){
 this.frontSide = frontSide;
 this.backSide = backSide;
};


var askQuestions = function (){

  if(counter < 6){

  inquirer.prompt([

    {type: "input",
      message: basicQuestions[counter].frontCard,
      name: "question"
      }


 ]).then(function(answer){

  var userInput = answer.question.toLowerCase();

    if(userInput === basicQuestions[counter].backCard){
          console.log("\nGreat!");
          correctAnswers++;
        }

        else{
          console.log("\nWrong!");
        }

	  console.log(basicQuestions[counter].fullText);
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
	        correctAnswers = 0;
	        askQuestions();

	      }
	      else{
	        console.log("Come back soon!");
	      }

  });
}

}; 

askQuestions();

 var questionA = new BasicCard("Who was the first president of the United States?", "George Washington" );
 var questionB = new BasicCard("Who was the third president of the United States?", "Thomas Jefferson");
 var questionC = new BasicCard("Who was the fifth president of the United States?", "James Monroe" );
 var questionE = new BasicCard("What was Abraham Lincoln before he became president?", "Lawyer" );
 var questionF = new BasicCard("Who was the first president who live in the White House?", "John Adams");
 var questionG = new BasicCard("Who was the first president who own an automobile?", "William Howard Taft" );

module.exports = BasicCard;

