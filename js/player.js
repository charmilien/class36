class Player
{
    constructor(){
        this.name=null;
    }

    getCount()
    {
        database.ref("playerCount").on("value",function(data){playerCount=data.val();})
        console.log("get Count")
    }


    updateCount(count)
    {
        database.ref('/').update({playerCount:count});
        console.log("updated count")
    }
    
    update                                                                                                                                                                                                                            (name)
    {   
        var playerIndex='players/player'+ playerCount;
        database.ref(playerIndex).set({name:this.name});
    }

}                                                                                                                                                                                                       