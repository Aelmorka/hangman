import './App.css';
import { useState } from 'react'

import enAlphabet from './components/alphabet.json'

import Letters from './components/Letters'
import Solution from './components/Solution'
import Scores from './components/Scores'

function App() {
  let cont = {word: "easyaa", hint: "Some text"}
  cont.filled = Array(cont.word.length).fill("_")
  let [alphabet, setAlphabet] = useState(enAlphabet)
  let [game, setGame] = useState(cont)
  
  function checkLetterInWord(letter) {
    if (game.word.toUpperCase().includes(letter)) {
      let newGame = {...game}
      newGame.filled = game.word.split("").map((el, index) => el.toUpperCase() === letter ? letter : game.filled[index])
      setGame(newGame)
    } 
  }
  function removeLetter(letter) {
    let newAlphabet = {...alphabet}
    let index = newAlphabet.letters.findIndex(el => el.name === letter)
    newAlphabet.letters[index].checked = true
    setAlphabet(newAlphabet)
  }

  function checkLetter(letter) {
    checkLetterInWord(letter) 
    removeLetter(letter)
  }
  return (
    <div className="hangman">
      <Scores scores="100" />
      <Solution game={game}/>
      <Letters alphabet={alphabet.letters} checked={checkLetter}/>
    </div>
  );
}

export default App;
