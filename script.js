// GLOBAL SCOPE
const startScreen = document.getElementById('start-screen'); 
const gameScreen = document.getElementById('game-screen'); 
const gameOverScreen = document.getElementById('gameover-screen'); 
const canvas = document.querySelector('canvas'); 
const ctx = canvas.getContext('2d');

// AUDIO

// BACKGROUND IMAGES

const backgroundImg1 = new Image(); 
backgroundImg1.src = './img/canvas1.jpeg'
const backgroundImg2 = new Image();
backgroundImg2.src = './img/canvas2.jpg' 
const backgroundImg3 = new Image(); 
backgroundImg3.src = './img/canvas3.jpg'
const backgroundImg4 = new Image(); 
backgroundImg4.src = './img/canvas4.png'

// canvas.width and canvas.height could be defined as variables, but I chose not to. 

let backgroundImg1Start = 0; 
let backgroundImg2Start = canvas.width; 
let backgroundImg3Start = canvas.width * 2; 
let backgroundImg4Start = canvas.width * 3; 
let backgroundMove = -3; 

// MINESWEEPER - GAME CHARACTER

const minesweeper = new Image(); 
minesweeper.src = './img/bombsuit.png'
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
detectorImg.src = '/img/detector.png'

const bitcoinImg = new Image();
bitcoinImg.src = '/img/bitcoin.png' 

const therapyImg = new Image(); 
therapyImg.src = '/img/therapy.png'

const chocolateImg = new Image(); 
chocolateImg.src = '/img/chocolate.png'

// OBSTACLES - DANGERS

const landmineImg = new Image(); 
landmineImg.src = '/img/landmine.png'

const landminesImg = new Image(); 
landminesImg.src = '/img/landmines.png'

// IMAGE SIZING

let detectorWidth = 80; 
let detectorHeight = 90; 
let bitcoinWidth = 80;
let bitcoinHeight = 80;
let therapyWidth = 90;
let therapyHeight = 80; 
let chocolateWidth = 90; 
let chocolateHeight = 80; 
let landmineWidth = 80; 
let landmineHeight = 80; 
let landminesWidth = 100; 
let landminesHeight = 85; 
let resourcesMove = -3.5; 

let resourcesArray = [
    {img: detectorImg, x: Math.floor(Math.random() * ((canvas.width * 1.5) - canvas.width + 1) + canvas.width), y: Math.floor(Math.random() * ((canvas.height - detectorHeight) - 0 + 1) + 0), width: detectorWidth, height: detectorHeight},
    {img: bitcoinImg, x: Math.floor(Math.random() * ((canvas.width * 1.25) - canvas.width + 1) + canvas.width), y: Math.floor(Math.random() * ((canvas.height - bitcoinHeight) - 0 + 1) + 0), width: bitcoinWidth, height: bitcoinHeight},
    {img: therapyImg, x: Math.floor(Math.random() * ((canvas.width * 1) - canvas.width + 1) + canvas.width), y: Math.floor(Math.random() * ((canvas.height - therapyHeight) - 0 + 1) + 0), width: therapyWidth, height: therapyHeight},
    {img: chocolateImg, x: Math.floor(Math.random() * ((canvas.width * 1.25) - canvas.width + 1) + canvas.width), y: Math.floor(Math.random() * ((canvas.height - chocolateHeight) - 0 + 1) + 0), width: chocolateWidth, height: chocolateHeight},    
]

let dangerArray = [
    {img: landmineImg, x: Math.floor(Math.random() * ((canvas.width * 1.5) - canvas.width + 1) + canvas.width), y: Math.floor(Math.random() * ((canvas.height - landmineHeight) - 0 + 1) + 0), width: landmineWidth, height: landmineHeight},
    {img: landminesImg, x: Math.floor(Math.random() * ((canvas.width * 1.5) - canvas.width + 1) + canvas.width), y: Math.floor(Math.random() * ((canvas.height - landminesHeight) - 0 + 1) + 0), width: landminesWidth, height: landminesHeight},
]


// GAME ID
let gameId = 0; 
let isGameOver = false; 

// HEALTH & SCORE
const health = document.querySelector('.health-bar');
const countHealth = document.querySelector('.health-img'); 
let healthCounter = 0; 

const score = document.querySelector('.score'); 
const scoreValue = document.querySelector('.score span'); 
const finalScore = document.querySelector('.final-score'); 
const highScore = document.querySelector('.high-score');
let scoreCounter = 0; 
let highScoreCounter = 0; 

const gameOverMessage = document.querySelector('.message'); 


// ON LOAD
window.onload = () => {
// Start button
document.getElementById('start-button').onclick = () => { startGame() };

const startGame = () => {
    startScreen.style.display = 'none'
    gameScreen.style.display = 'block'
    gameOverScreen.style.display = 'none'
    animate();
}

const animate = () => {
    animateBackground();
    gameId = requestAnimationFrame(animate)
    if (gameId % 500 === 0 && resourcesMove >= -5 && dangerMove >= -5) {
        resourcesMove -= 0.25; 
        dangerMove -= 0.25;
    }
    if (gameId >= 50000) {
        cancelAnimationFrame(gameId)
    }
    if (isGameOver) {
        finalScore.innerText = `Score: ${scoreCounter}`
        if(scoreCounter > highScoreCounter) {
            highScoreCounter = scoreCounter
        }
        highScore.innerText = `High Score ${highScoreCounter}`

// Game over
        if (scoreCounter >= 0 && scoreCounter <= 5) {
            gameOverMessage.innerText = 'Detonation! Mission aborted.'
        }
        else if (scoreCounter >= 6 && scoreCounter <=10) {
            gameOverMessage.innerText = `You're truly mine blowing!`
        } else {gameOverMessage.innerText = 'Back to base.'}

        clearCanvas(); 
        cancelAnimationFrame(gameId);
        startScreen.style.display = 'none'
        gameScreen.style.display = 'none'
        gameOverMessage.style.display = 'block'
    }
}
}; 

// ANIMATIONS
const animateBackground = () => {
clearCanvas(); 
drawCanvas();
moveCanvas(); 
drawCanvas2();
moveCanvas2(); 
drawCanvas3();
moveCanvas3(); 
drawCanvas4();
moveCanvas4();
drawMinesweeper(); 
moveMinesweeperX(); 
moveMinesweeperY(); 
drawResource(); 
drawDanger();  
};

// CANVAS
const clearCanvas = () => {ctx.clearRect(0, 0, canvas.width, canvas.height)};
const drawCanvas = () => {ctx.drawImage(backgroundImg1, backgroundImg1Start, 0, canvas.width, canvas.height)};
const moveCanvas = () => {
    let backgroundCurrentPosition = backgroundImg1Start += backgroundMove;
    if (backgroundImg1Start >= canvas.width) {
        backgroundCurrentPosition;
    } else {
        backgroundImg1Start = canvas.width * 4;
    }
};
const drawCanvas2 = () => {ctx.drawImage(backgroundImg2, backgroundImg2Start, 0, canvas.width, canvas.height)};
const moveCanvas2 = () => {
    let backgroundCurrentPosition = backgroundImg2Start += backgroundMove;
    if (backgroundImg2Start >= canvas.width) {
        backgroundCurrentPosition;
    } else {
        backgroundImg2Start = canvas.width * 4;
    }
}; 
const drawCanvas3 = () => {ctx.drawImage(backgroundImg3, backgroundImg3Start, 0, canvas.width, canvas.height)};
const moveCanvas3 = () => {
    let backgroundCurrentPosition = backgroundImg3Start += backgroundMove;
    if (backgroundImg3Start >= canvas.width) {
        backgroundCurrentPosition;
    } else {
        backgroundImg3Start = canvas.width * 4;
    }
}; 
const drawCanvas4 = () => {ctx.drawImage(backgroundImg4, backgroundImg4Start, 0, canvas.width, canvas.height)};
const moveCanvas4 = () => {
    let backgroundCurrentPosition = backgroundImg4Start += backgroundMove;
    if (backgroundImg4Start >= canvas.width) {
        backgroundCurrentPosition;
    } else {
        backgroundImg4Start = canvas.width * 4;
    }
};

// MINESWEEPING 🥵
const drawMinesweeper = () => {ctx.drawImage(minesweeper, minesweeperStartX, minesweeperStartY, minesweeperWidth, minesweeperHeight)
};

const moveMinesweeperX = () => {
    if (minesweeperStartX + minesweeperMoveX >= 0 && minesweeperStartX + minesweeperMoveX <= canvas.width - minesweeperWidth) {
        minesweeperStartX += minesweeperMoveX
    }
}; 

const moveMinesweeperY = () => {
    if (minesweeperStartY + minesweeperMoveY >= 0 && minesweeperStartY + minesweeperMoveY <= canvas.height - minesweeperHeight); 

const drawResource = () => {
    resourcesArray.forEach(resource => {
        ctx.drawImage(resource.img, resource.x, resource.y, resource.width, resource.height)
        resource.x += resourcesMove;
        if (resource.x < 0) {
            resource.x = Math.floor(Math.random() * ((canvas.width * 3) - (canvas.width * 2) + 1) + (canvas.width * 2))
        }
        if (resource.x < minesweeperStartX + minesweeperWidth - 40 &&
            resource.x > minesweeperStartX &&
            resource.y < minesweeperStartY - 40 &&
            resource.y > minesweeperStartY + minesweeperHeight) {
            resource.x = Math.floor(Math.random() * ((canvas.width * 3.5) - (canvas.width * 2.5) + 1) + (canvas.width * 2.5))
            }
        if ((resource.img === detectorImg || bitcoinImg || therapyImg ||chocolateImg) && healthCounter < 3) {
            healthCounter += 1;
            if (healthCounter === 3) {
                countHealth.setAttribute('src', '/img/GreenBar.png')
            } else if (healthCounter === 2) {
                countHealth.setAttribute('src', '/img/YellowBar.png')
            } else if (healthCounter === 1) {
                countHealth.setAttribute('src', '/img/RedBar.png')
            }
        }
        else {
            healthCounter += 1; 
            scoreValue.setAttribute('style')
            scoreValue.innerText =`${scoreCounter}`; 
        }
        });
        } 

const drawDanger = () => {
    dangerArray.forEach(danger => {
        ctx.drawImage(danger.img, danger.x, danger.y, danger.width, danger.height)
        danger.x += dangerMove; 
        if (danger.x < 0) {
            danger.x = Math.floor(Math.random() * ((canvas.width * 1.75) - canvas.width + 1) + canvas.width)
        }
        if (danger.x < minesweeperStartX + minesweeperWidth - 40 &&
            danger.x > minesweeperStartX && 
            danger.y > minesweeperStartY - 40 &&
            danger.y < minesweeperStartY + minesweeperHeight) {
                healthCounter -= 2;
            if (healthCounter < 0) {
                danger.x = Math.floor(Math.random() * ((canvas.width * 3) - (canvas.width * 1.5) + 1) + (canvas.width * 1.5))
                isGameOver = true; 
            } else {danger.x = Math.floor(Math.random() * ((canvas.width * 3) - (canvas.width * 1.5) + 1) + (canvas.width * 1.5))}
         // check out line 282, it might have a closing curly bracket set by mistake  
         if (healthCounter === 3) {
            countHealth.setAttribute('src', '/img/GreenBar.png') }
         else if (healthCounter === 2) {
            countHealth.setAttribute('src', '/img/YellowBar.png') }
         else if (healthCounter === 1) {
            countHealth.setAttribute('src', '/img/RedBar.png')}
         };   
         })
    }

// EVENT LISTENERS
document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        minesweeperMoveY = minesweeperMoveUp;
    }
    else if (event.key === 'ArrowDown') {
        minesweeperMoveY = minesweeperMoveDown; 
    }
    else if (event.key === 'ArrowRight') {
        minesweeperMoveX = minesweeperMoveRight;
    }
    else if (event.key === 'ArrowLeft') {
        minesweeperMoveX = minesweeperMoveLeft;
    }

} );

document.addEventListener('keyup', event => {
    minesweeperMoveX = 0; 
    minesweeperMoveY = 0; 
})

gameScreen.style.display = 'none'; 
gameOverScreen.style.display = 'none'; 

// RESTART 
document.getElementById('restart-button').onclick = () => {
    clearCanvas();
    backgroundImg1Start = 0; 
    backgroundImg2Start = canvas.width;
    backgroundImg3Start = canvas.width * 2;
    backgroundImg4Start = canvas.width * 3; 
    backgroundMove = -3; 
    minesweeperStartX = 20; 
    minesweeperStartY = canvas.height - minesweeperHeight; 
    minesweeperMoveX = 0;
    minesweeperMoveY = 0;
    minesweeperMoveUp = -8; 
    minesweeperMoveDown = +8; 
    minesweeperMoveRight = +8; 
    minesweeperMoveLeft = -8; 
    resourcesMove = -3.5; 
    resourcesArray = [
        {img: detectorImg, x: Math.floor(Math.random() * ((canvas.width * 1.5) - canvas.width + 1) + canvas.width), y: Math.floor(Math.random() * ((canvas.height - detectorHeight) - 0 + 1) + 0), width: detectorWidth, height: detectorHeight},
        {img: bitcoinImg, x: Math.floor(Math.random() * ((canvas.width * 1.25) - canvas.width + 1) + canvas.width), y: Math.floor(Math.random() * ((canvas.height - bitcoinHeight) - 0 + 1) + 0), width: bitcoinWidth, height: bitcoinHeight},
        {img: therapyImg, x: Math.floor(Math.random() * ((canvas.width * 1) - canvas.width + 1) + canvas.width), y: Math.floor(Math.random() * ((canvas.height - therapyHeight) - 0 + 1) + 0), width: therapyWidth, height: therapyHeight},
        {img: chocolateImg, x: Math.floor(Math.random() * ((canvas.width * 1.25) - canvas.width + 1) + canvas.width), y: Math.floor(Math.random() * ((canvas.height - chocolateHeight) - 0 + 1) + 0), width: chocolateWidth, height: chocolateHeight},    
    ]
    dangerMove = -3.5; 
    dangerArray = [
        {img: landmineImg, x: Math.floor(Math.random() * ((canvas.width * 1.5) - canvas.width + 1) + canvas.width), y: Math.floor(Math.random() * ((canvas.height - landmineHeight) - 0 + 1) + 0), width: landmineWidth, height: landmineHeight},
        {img: landminesImg, x: Math.floor(Math.random() * ((canvas.width * 1.5) - canvas.width + 1) + canvas.width), y: Math.floor(Math.random() * ((canvas.height - landminesHeight) - 0 + 1) + 0), width: landminesWidth, height: landminesHeight},
    ]
    isGameOver = false; 
    healthCounter = 0; 
    scoreCounter = 0; 
    scoreValue.innerText = 0; 
    countHealth.setAttribute('src', '/img/RedBar.png');
    gameOverMessage.innerText = '';

    startGame();
}
} 