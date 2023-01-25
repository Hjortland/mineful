// GLOBAL SCOPE
const startScreen = document.getElementById("start-screen"); 
const gameScreen = document.getElementById("game-screen"); 
const gameoverScreen = document.getElementById("gameover-screen"); 
const canvas = document.querySelector("canvas"); 
const ctx = canvas.getContext("2d");

// AUDIO

// BACKGROUND IMAGES

const backgroundImg1 = new Image(); 
backgroundImg1.src = "/mineful/img/canvas1.jpeg"
const backgroundImg2 = new Image();
backgroundImg2.src = "/mineful/img/canvas2.jpg" 
const backgroundImg3 = new Image(); 
backgroundImg3.src = "/mineful/img/canvas3.jpg"
const backgroundImg4 = new Image(); 
backgroundImg4.src = "/mineful/img/canvas4.png"

// canvas.width and canvas.height could be defined as variables, but I chose not to. 

let backgroundImg1Start = 0; 
let backgroundImg2Start = canvas.width; 
let backgroundImg3Start = canvas.width * 2; 
let backgroundImg4Start = canvas.width * 3; 
let backgroundMove = -3; 

// MINESWEEPER - GAME CHARACTER

const minesweeper = new Image(); 
minesweeper.src = "/mineful/img/bombsuit.png"
let minesweeperWidth = 150; 
let minesweeperHeight = 250; 
let minesweeperStartX = 20; 
let minesweeperStartY = canvas.height - minesweeperHeight; 
let minesweeperMoveX = 0;
let minesweeperMoveY = 0; 
let minesweeperMoveUp = -8; 
let minesweeperMoveDown = +8; 
let minesweeperMoveRight = +8; 
let minesweeperMoveLeft = -8; 






// OBSTACLES - RESOURCES
const detectorImg = new Image(); 
detectorImg.src = "/mineful/img/detector.png"

const bitcoinImg = new Image();
bitcoinImg.src = "/mineful/img/bitcoin.png" 

const therapyImg = new Image(); 
therapyImg.src = "/mineful/img/therapy.png"

const chocolateImg = new Image(); 
chocolateImg.src = "/mineful/img/chocolate.png"

// OBSTACLES - DANGERS

const landmineImg = new Image(); 
landmineImg.src = "/mineful/img/landmine.png"

const landminesImg = new Image(); 
landminesImg.src = "/mineful/img/landmines.png"

// IMAGE SIZING

let detectorWidth = 80; 
let detectorHeight = 90; 
let bitcoinWidth = 80;
let bitcoinHeith = 80;
let therapyWidth = 90;
let therapyHeigth = 80; 
let chocolateWidth = 90; 
let chocolateHeigth = 80; 
let landmineWidth = 80; 
let landmineHeigth = 80; 
let landminesWidth = 100; 
let landminesHeigth = 85; 
let obstaclesMove = -3.5; 

let obstacleArray = [
    {img: mapImg, x: Math.floor(Math.random() * ((canvasWidth * 1.5) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - mapHeight) - 0 + 1) + 0), width: mapWidth, height: mapHeight},
    {img: compassImg, x: Math.floor(Math.random() * ((canvasWidth * 1.25) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - compassHeight) - 0 + 1) + 0), width: compassWidth, height: compassHeight},
    {img: boneImg, x: Math.floor(Math.random() * ((canvasWidth * 1) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - boneHeight) - 0 + 1) + 0), width: boneWidth, height: boneHeight},
    {img: ballImg, x: Math.floor(Math.random() * ((canvasWidth * 1.25) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - ballHeight) - 0 + 1) + 0), width: ballWidth, height: ballHeight},
    {img: pigeonImg, x: Math.floor(Math.random() * ((canvasWidth * 1.5) - canvasWidth + 1) + canvasWidth), y: Math.floor(Math.random() * ((canvasHeight - pigeonHeight) - 0 + 1) + 0), width: pigeonWidth, height: pigeonHeight},
]



// GAME ID

// STRENGTH & SCORE

// ON LOAD

// START BUTTON

// GAME OVER

// ANIMATIONS

// CANVAS

// START FUNCTIONS

// HEALTH OBSTACLES FUNCTIONS

// DANGER OBSTACLES FUNCTIONS

// EVENT LISTENERS

// RESTART SCREEN


