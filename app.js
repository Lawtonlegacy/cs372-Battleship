document.addEventListener("DOMContentLoaded", () => {

const userGrid = document.querySelector('.grid-user')
const computerGrid = document.querySelector('.grid-computer')
const displayGrid = document.querySelector('.grid-display')

const userSquares = []
const computerSquares = []

const width = 10


// Board creation 
function createBoard(grid, squares){
    for(let i = 0; i<width*width; i++){
        const square = document.createElement('div')
        square.dataset.id = i 
        grid.appendChild(square)
        squares.push(square)
    }
}
createBoard(userGrid, userSquares)
createBoard(computerGrid, computerSquares)

// Array to hold all ships
const shipArray = [
    {
        name: 'destroyer',
        directions: [
            [0,1],
            [0,width]
        ]   
    },
    {
        name: 'submarine',
        directions: [
            [0,1,2],
            [0,width,width*2]
        ]   
    },
    {
        name: 'cruiser',
        directions: [
            [0,1,2],
            [0,width,width*2]
        ]   
    },
    {
        name: 'battleship',
        directions: [
          [0, 1, 2, 3],
          [0, width, width*2, width*3]
        ]
    },
    {
        name: 'carrier',
        directions: [
          [0, 1, 2, 3,4],
          [0, width, width*2, width*3,width*4]
        ]
    }
]

})