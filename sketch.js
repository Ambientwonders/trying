//first I created a folder in sketch called 'images'
//then I uploaded the photos into it


//then I'm setting veil as a variable using let and making it equal 255, which is full opacity
let veil = 255;


 //then I'm using the preload function, which tells p5.js to load the photos
function preload(){
  
 img1 = loadImage ("Images/Cows.jpg")
 img2 = loadImage("Images/Fairlife.jpg")
  
  
}

function setup() {
  createCanvas(400, 400);
  
  //then I'm using the describe function to describe the project for greater accessibility, though not sure if I've done this correctly

   describe('At first entire image is black which gradually fades to reveal two images. Image 1 is a large circle of movement-restricted cows inside an industrial dairy operation being milked using machinery and without consent.Image 2 is of a dark blue background, with a yellow circle in the middle centering two fairlife milk containers. Text comes on screen that says Is this a Fair Life and then this progression loops.')
}


 //then in the draw function, I'm adding the images, choosing their position, and adding an if statement saying that if the veil is less than 80, the text should display, plus the style info for the text


function draw() {
  background(220);
  
  
  image(img1,0,0,400,200);
  image(img2,0,200,400,200);
  
  if (veil < 110) {

  textSize(35)
  fill("#FFEB3B")
  text("Is this", 15, 235)

  fill("#F44336")
  textSize(30)
  text("a Fair", 315, 310)

  textSize(40)
  fill("#F44336")
  text("Life?", 310, 350)

}
  
 
   //then I'm telling the computer that every time the draw function runs,  veil's opacity should reduce by 1, until it reaches 0. aka it should decrease until the black cover fades away
  
  veil = max(veil - 1, 0);
  
  //then I'm setting the fill to black, and opacity to whatever value veil is at (veil is opacity)
  
fill(0, veil);
  
  //then I'm telling the computer to draw a square that covers the whole canvas, and when it does it will use the fill I just set above
  
square(0, 0, 400);
  

   //then I'm telling the computer to check if veil is equal to zero opacity, and if it is, then veil should go back to being full opacity which makes the screen black
  
  if (veil === 0) veil = 255;
  
  
}
