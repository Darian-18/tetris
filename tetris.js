document.addEventListener('DOMContentLoaded', () =>{
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const ScoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector('#start-button')
    const width = 10

    const lTetrominoes = [
        [1, width+1, width*2+1, 2],
        [1, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ] 

   /* const lTetrominoes = 'firstshape'
    const zTetrominoes = 'secondshape'
    const oTetrominoes = 'thirdshape'
    const iTetrominoes = 'fourthshape'
    const tTetrominoes = 'fifthshape'



    const tetrominoes = [tTetrominoes, zTetrominoes, oTetrominoes, iTetrominoes, lTetrominoes]*/

    
})