document.addEventListener("DOMContentLoaded", () => {

const userGrid = document.querySelector('.grid-user')
const computerGrid = document.querySelector('.grid-computer')
const displayGrid = document.querySelector('.grid-display')
const ships = document.querySelectorAll('.ship')
const destroyer = document.querySelector('.destroyer-container')
const submarine = document.querySelector('.submarine-container')
const cruiser = document.querySelector('.cruiser-container')
const battleship = document.querySelector('.battleship-container')
const carrier = document.querySelector('.carrier-container')
const rotateButton = document.querySelector('#rotate')

let isHorizontal = true

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



function rotate() {
    if (isHorizontal) {
      destroyer.classList.toggle('destroyer-container-vertical')
      submarine.classList.toggle('submarine-container-vertical')
      cruiser.classList.toggle('cruiser-container-vertical')
      battleship.classList.toggle('battleship-container-vertical')
      carrier.classList.toggle('carrier-container-vertical')
      isHorizontal = false
      console.log(isHorizontal)
      return isHorizontal
    }
    if (!isHorizontal) {
      destroyer.classList.toggle('destroyer-container-vertical')
      submarine.classList.toggle('submarine-container-vertical')
      cruiser.classList.toggle('cruiser-container-vertical')
      battleship.classList.toggle('battleship-container-vertical')
      carrier.classList.toggle('carrier-container-vertical')
      isHorizontal = true
      console.log(isHorizontal)
      return isHorizontal
    }
}

  rotateButton.addEventListener('click', rotate)


ships.forEach(ship => ship.addEventListener('dragstart', dragStart))
userSquares.forEach(square => square.addEventListener('dragstart', dragStart))
userSquares.forEach(square => square.addEventListener('dragover', dragOver))
userSquares.forEach(square => square.addEventListener('dragenter', dragEnter))
userSquares.forEach(square => square.addEventListener('dragleave', dragLeave))
userSquares.forEach(square => square.addEventListener('drop', dragDrop))
userSquares.forEach(square => square.addEventListener('dragend', dragEnd))

let selectedShipNameWithIndex
let draggedShip
let draggedShipLength

ships.forEach(ship => ship.addEventListener('mousedown', (e) => {
    selectedShipNameWithIndex = e.target.id
    console.log(selectedShipNameWithIndex)
}))

})