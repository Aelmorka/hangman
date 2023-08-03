import './App.css';
import { useState } from 'react'

import Letters from './components/Letters'
import Solution from './components/Solution'
import Scores from './components/Scores'
import Hanger from './components/Hanger'

function App() {
	let cont = {word: "easyaa", hint: "Some text"}
  	cont.filled = Array(cont.word.length).fill("_")
  	let [game, setGame] = useState(cont)
  	let [mistakes, setMistakes] = useState(0)
  
  	function checkLetterInWord(letter) {
    	if (game.word.toUpperCase().includes(letter)) {
      		let newGame = {...game}
      		newGame.filled = game.word.split("").map((el, index) => el.toUpperCase() === letter ? letter : game.filled[index])
      		setGame(newGame)
    	} else {
      	setMistakes(mistakes + 1)
    	}
  	}
  	return (
    	<div className="hangman">
      		<Hanger mistakes={mistakes}/>
      		<Scores scores="100" />
      		<Solution game={game}/>
      		<Letters checked={checkLetterInWord}/>
    	</div>
  	);
}

export default App;
