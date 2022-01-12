
//below from https://stackoverflow.com/questions/2677671/how-do-i-rotate-a-single-object-on-an-html-5-canvas
function drawImageRot(img,x,y,width,height,deg){
    // Store the current context state (i.e. rotation, translation etc..)
    ctx.save()

    //Convert degrees to radian 
    var rad = deg * Math.PI / 180;

    //Set the origin to the center of the image
    ctx.translate(x + width / 2, y + height / 2);

    //Rotate the canvas around the origin
    ctx.rotate(rad);

    //draw the image    
    ctx.drawImage(img,width / 2 * (-1),height / 2 * (-1),width,height);

    // Restore canvas state as saved from above
    ctx.restore();
}

//end of code from https://stackoverflow.com/questions/2677671/how-do-i-rotate-a-single-object-on-an-html-5-canvas