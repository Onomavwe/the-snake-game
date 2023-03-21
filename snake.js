import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 4
const snakeBody = [{ x: 11, y: 11 }]
let newSegments = 0

// Setting up the update loop
export function update() {
    addSegments()

    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

// Setting up the draw loop
export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

// Setting up the expandSnake function
export function expandSnake(amount) {
    newSegments += amount
}

// Setting up the onSnake function
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

// Setting up the getSnakeHead function
export function getSnakeHead() {
    return snakeBody[0], { ignoreHead: true }
}

// Setting up the snakeIntersection function
export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
} 

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
  }

  newSegments = 0
}

// Setting up the equalPositions function
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}