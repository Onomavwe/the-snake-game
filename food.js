let food = { x: 11, y: 1 }

// Setting up the update loop
export function update() {
    console.log('Update food') 
}

// Setting up the draw loop
export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}