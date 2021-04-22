var game, gameState=0;
var form;
var player,playerCount=0;

function setup()
{
    createCanvas(700,400)
    database=firebase.database();
    game= new Game()
    game.getState()
    game.start()
}

function draw()
{
 background("cyan")

}







