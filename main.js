var canvas = new fabric.Canvas("myCanvas");
block_width = 30;
block_height = 30;
playerx = 10;
playery = 10;
playerobject = "";
blockimg = "";
function player_update() {
    fabric.Image.fromURL("player.png", function(Img){
        playerobject = Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToheight(150);
        playerobject.set({
            top: playerx,
            left: playery
        });
        canvas.add(playerobject);
    });
}