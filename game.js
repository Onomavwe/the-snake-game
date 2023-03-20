// Description: This file contains the main game logic
// Setting up the game loop === a function that repeats itself over and over again
// within a set time interval to constantly update the game state and render the game 
// to the screen (updating and rendring the snake and food position)
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'

const gameBoard = document.getElementById('game-board')

let lastRenderTime = 0

function main(currentTime) {
  window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime

// This is the update loop which is a function that updates the game state
    update()

// This is the draw loop which is a function that draws the game to the screen by taking logic 
// from the update loop and rendering it to the screen
    draw()
}

window.requestAnimationFrame(main)

// Setting up the update loop
function update() {
    updateSnake()
    updateFood()
}

// Setting up the draw loop
function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}