const GRID_SIZE = 21;

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > 21 ||
        position.y < 1 || position.y > 21
    )
}