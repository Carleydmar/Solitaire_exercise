function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");

    background (7, 102, 42)
}

function draw() {

    //Variables to control my card
  var cardPosX = mouseX;
  var cardPosY = mouseY;
  
  var cardWidth = 42;
  var cardHeight = cardWidth+20;
  
  var circlesize=cardHeight-70;
  
  rectMode (CENTER);
  
  //Draw the card background
  
  fill(255)
  stroke (0);
  rect(cardPosX, cardPosY, cardWidth, cardHeight);
  
  //inside circle
  
  fill(199, 15, 12)
  ellipse(cardPosX, cardPosY, circlesize, circlesize);
  
  
  var textDiff = 17;
  textSize(11)
  text('A', cardPosX-textDiff, cardPosY-textDiff);
      text('A', cardPosX+(textDiff-7), cardPosY+(textDiff+8));
  
  
  
}