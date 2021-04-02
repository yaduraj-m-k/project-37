class Quiz {
  constructor(){
    this.title = createElement('h2');
  }

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
   question.hide()

    //write code to change the background color here

    background("red")

    //write code to show a heading for showing the result of Quiz
    text("quiz game ",200,200)
    textSize(20)

    //call getContestantInfo( ) here
    if(allConstestants !== undefined){
      fill("blue");
      textSize(20);
      Text("NOTE:contestant who answered correct are highlited in green colour",130,230)
    }


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    for(var plr in allConstestants){
      var correctAns="2";
      if(correctAns===allConstestants[plr].answer)
      fill("green")
      else
      fill("red")
    }
    
  }

}
