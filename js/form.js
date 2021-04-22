class Form
{
    constructor()
    {
        this.title= createElement('h1')
        this.input=createInput("Name")
        this.button=createButton("PLAY")
        this.greet=createElement("h2")
    }
   
     display()
     {
         this.title.html("Car Racing Game")
         this.title.position(300,30)
         this.input.position(320,200)
         this.button.position(350,300)

         this.button.mousePressed( ()=> { 
         this.input.hide()
         this.button.hide()
         player.name=this.input.value()
         this.greet.html("Hi!! Welcome  "+player.name);
         this.greet.position(320,200)

            playerCount++;
            player.updateCount(playerCount)
             
            player.update()
         })
     }

    
}