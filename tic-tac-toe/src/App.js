import { useState } from 'react'
import  './index.css'
const size = 3
var player = "X"
const changePlay  = () => {
  if (player === "O"){
    player = "X"
  }
  else{
    player = "O"
  }
  return player
}


const Button = ({grid,stateChanger, i, j, text}) => {
  return (
    <button onClick = {
      () => {
        var newBoard = []
        for (var e = 0; e<size;e++){
          var newRow = []
          for (var f = 0; f<size;f++){
            if((e===i)&&(f===j)&&(grid[e][f].position === "_")){
              newRow.push({
                ...grid[e][f],
                position: changePlay()
              })
            }
            else{
              newRow.push({
                ...grid[e][f]
              })
            }
          }
          newBoard.push(newRow)
        }
        stateChanger(newBoard)
      }
    } size = "huge">
      {text}
    </button>
  )
}

const Rows = ({row, grid, stateChanger, i}) => {
  var buts = []
  // console.log(row)
  for (var j = 0; j<size;j++) {
    buts.push(
      <Button grid = {grid} stateChanger  ={stateChanger} i = {i} j={j} key = {grid[i][j].num} text = {grid[i][j].position}></Button>
    )
  }
  return(
    <div >
      {buts}
    </div>
  )
}

const Grid = ({grid, stateChanger}) => {
  // console.log(grid)
  var rows = []
  for (var i = 0; i<size; i++){
    rows.push(
      <Rows row = {grid[i]} grid = {grid} stateChanger = {stateChanger} i = {i} key = {grid[i][0].num}></Rows>
    )
  }
  return (
    <div>
      {rows}
    </div>
  )
}

const App = () => {
  var emptyBoard = []
  for (var i = 0;i<size;i++){
    var emptyRow = []
    for (var j = 0;j<size;j++){
      emptyRow.push({
        position: "_",
        num: (i*size)+j
      })
    }
    emptyBoard.push(emptyRow)
  }
  const [board, setBoard] = useState(emptyBoard)





  return (
    <div>
      <Grid grid = {board} stateChanger = {setBoard}></Grid>
    </div>
  )
}

export default App
