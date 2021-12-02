class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }


  async start(){
    background(cor);
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
      
    }
  }



  play(){
    //write code here to hide question elements
    question.input1.hide();
    question.input2.hide();
    question.button.hide();
    //write code to change the background color here
    background(cor);
    //write code to show a heading for showing the result of Quiz
    
    //call getContestantInfo( ) here

    getContestantInfo(); 
      
    
    if(allConstestant !== undefined){
      fill("Blue");
      textSize(20);
      text("*NOTE: Contestant who answered correct are highlited in green color!",130,230);
      for(var plr in allConstestants){
        var correcteAns = "2";
        if(correctAns === allContestans[plr].answer)
          fill(green);
          text(contestant.name, 200,50);
        else
          fill(red);
          text(contestant.name, 200,100);
      }

    }

    //write condition to check if contestantInfor is not undefined
    
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
