var mySong;
var analyzer;
var myImage;
var cacchina;

function preload(){
  // put preload code here
  mySong = loadSound("./assets/Scoregge_di_Natale.mp3");
  myImage = loadImage("./assets/Asino_sedere.png");
  cacchina = loadImage("./assets/Cacchina.png");
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

  mySong.loop();

  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);

}

function draw() {
  // put drawing code here

  noStroke();

 if(mouseX < width-250){
  fill(255, 206, 206);
  mySong.pause();
}
else{
  fill(255, 68, 68);
  if(mySong.isPlaying() == false){
   mySong.play();
 }
 var volume = analyzer.getLevel();
 volume = map(volume, 0, 1, 50, width/2);
}

background(135, 181, 255);
image(myImage, width/10, height/7, volume + myImage.width/3, volume + myImage.height/3);

push();
fill(79, 49, 91);
ellipse(width/2 + 125, height/2 + 125, volume * random(0, 2), volume * random(0, 2));
pop();

push();
fill(249, 14, 46);
ellipse(width/2 + 125, height/2 + 125, volume * random(0, 1.5), volume * random(0, 1.5));
pop();

push();
fill(126, 186, 96);
ellipse(width/2 + 125, height/2 + 125, volume * random(), volume * random());
pop();

image(cacchina, width/2 + 125 - 20, height/2 + 125 - 20, volume/4 + myImage.width/60, volume/4 + myImage.height/60);

var myRate = map(mouseY, 0, height, 0, 2);
 mySong.rate(myRate);

 //banda laterale
 rect(width-250, 0, width, height);
 //tasto play
 if(mouseX < width-250){
  fill('#111111');
  triangle(width-95-50, height/2-25, width-95-50, height/2+15, width-110, height/2-5);
 }
 else{
  fill('#111111');
  rect(width-95-25, height/2-25, 12, 40);
  rect(width-95-50, height/2-25, 12, 40);
  //Piu dell'acceleratore musicale
  rect(width-126, height-112, 2, 20);
  rect(width-135, height-103, 20, 2);

  //Meno dell'acceleratore musicale
  push();
  fill('#111111');
  ellipse(width-130, 72, 40);
  ellipse(width-125, height-102, 40);
  pop();

  push();
  fill('#ffffff');
  rect(width-126, height-112, 2, 20);
  rect(width-135, height-103, 20, 2);
  rect(width-140, 72, 20, 2);
  pop()

  //linee acceleratore
  for(i = 0; i < height/2; i += 30){
    fill('#ffffff');
      rect(width-250, i + 10, 20, 2);
  }
  for(i = height/2 - 5; i < height; i += 8){
      rect(width-250, i, 20, 2);
  }
 }

}
