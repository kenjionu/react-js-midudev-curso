import './App.css'
import {useEffect, useState} from "react";
import { Square } from './components/Square';
import { TURNS } from './constants';
import { checkEndGame, checkWinner } from './logic/board';
import { WinnerModal } from './components/Winner';
import { resetGameStorage, saveGameToStorage } from './logic/storage';







function App() {
    const [board, setBoard] = useState(()=> {
        console.log('inicializar estado del board')
        const boardFromStorage = window.localStorage.getItem('board')
        return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
    })

    const [winner, setWinner] = useState<null | boolean>(null)
    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.X)
        setWinner(null)
  
        resetGameStorage()
    }

    const updateBoard = (index) => {
        if(board[index] || winner) return
        //actualizar el tablero

        const newBoard = [...board]
        //spread y rest operator (estudiar)

        //por que esto ESTO ESTA MAL no debes inmutar los estados y ni los valores
        newBoard[index] = turn
        setBoard(newBoard)

        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)
      

     

        const newWinner = checkWinner(newBoard);
        if(newWinner){
            setWinner(newWinner)//actualiza el estado, y es asincrono en reactjs

        } else if(checkEndGame(newBoard)){ 
            setWinner(false)
        }
    }



    const [turn, setTurn] = useState(() => {
        const turnFromStorage = window.localStorage.getItem('turn')
        return turnFromStorage ?? TURNS.X;
    })

    return (
      <main className='board'>
          <h1>Tic Tac Toe</h1>
          <button onClick={resetGame}>Reset del juego</button>
          <section className='game'>
              {
                  board.map((_: any, index: number) => {
                      return (
                        <Square key={index} index={index} updateBoard={updateBoard} >
                            {board[index]}
                        </Square>
                      )
                  })
              }
          </section>
          <section className='turn'>
              <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
              <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>

          </section>
          <WinnerModal resetGame={resetGame} winner={winner}/>

      </main>
  )
}

export default App
