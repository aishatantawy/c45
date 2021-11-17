var p1,p2,asteroid1, asteroid2, asetroid3;
var blast, blastImg, space, spaceImg;
var spaceship, spaceshipImg, laserImg;
var shoot = 0; 
var score = 0;
var laser, asteroidGroup, laserGroup;
var explosionSound, laserSound, explosionImg;
var instruction = 0;
var play = 1;
var end = 2;
var gameState = instruction; 
var endLine, canvas;

function Preload(){
   spaceImg = loadImage("space.png"); 
   spaceshipImg = loadImage("spaceship.png");
   laserImg = loadImage("laser.png");
   asteriod1 = loadImage("as1.png");
   asteriod2 = loadImage("as2.png");
   asteroid3 = loadImage("as3.png");
   explosionImg = loadImage("blast.png");
   explosionSound = loadSound("explosion.mp3");
   laserSound = loadSound("laser sound.mp3");
}

function setup(){
 canvas = createCanvas(1000,700);
 space = createSprite(250,350,30,20);
 space.addImage(spaceImg);
 space.VelocityY =(5 + score/10);


 spaceship = createSprite(250,600);
 spaceship.addImage(spaceshipImg);
 spaceship.Scale = 0.5;

 p1 = createSprite(250,600);
 p1.setCollider("rectangle",70,-27,5,265,156);
 p1.visible = false;

 p2 = createSprite(250,600);
 p2.setCollider("rectangle",70,-27,5,265,24);
 p2.visible = false;

 asteriodGroup = new Group; 
 laserGroup = new Group;
 
}

function draw(){
background(0);








}
