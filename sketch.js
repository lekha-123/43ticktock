var hr,mn,sc
var hrangle,mnangle,scangle;
function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);
  translate (200,200);
  rotate(-90);
  hr=hour();
 mn=minute();
 sc=second(); 
 scangle=map(sc,0,60,0,360);
 mnangle=map(mn,0,60,0,360);
 hrangle=map(hr%12,0,12,0,360);

 push ();
rotate (scangle);
stroke ("red");
strokeWeight(7);
line(0,0,100,0);
pop ();

push ();
rotate (mnangle);
stroke ("green");
strokeWeight(7);
line(0,0,75,0);
pop ();

push ();
rotate (hrangle);
stroke ("blue");
strokeWeight(7);
line(0,0,50,0);
pop ();



noFill();
strokeWeight(10);
stroke("red");
arc (0,0,300,300,0,scangle);
stroke("green");
arc (0,0,260,260,0,mnangle);
stroke("blue");
arc (0,0,230,230,0,hrangle);
  drawSprites();
}