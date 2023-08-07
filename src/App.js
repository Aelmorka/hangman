import './App.css';
import './web/castle.css';
import './web/landscape.css';
import './web/moon.css';
import './web/tree.css';
import './web/prisoner.css';
import './web/gameover.css';
import { useState } from 'react'

// import enAlphabet from './components/alphabet.json'
import Letters from './components/Letters'
import Solution from './components/Solution'
import Scores from './components/Scores'
import Hanger from './components/Hanger'
import GameOver from './components/GameOver'

function App() {
	let cont = {word: "easy", hint: 'The "hardest" word ever'}
  	cont.filled = Array(cont.word.length).fill("_")
	function generateLetterStatuses() {
		let letterStatus = {}
		for (let i = 65; i < 91; i++) {
		  letterStatus[String.fromCharCode(i)] = false
		}
		return letterStatus
	}
  	let [game, setGame] = useState(cont)
	let [alphabet, setAlphabet] = useState(generateLetterStatuses())
  	let [mistakes, setMistakes] = useState(0)
	let [win, setWin] = useState(false)
	let [score, setScore] = useState(100)
  
  	function getNewWord() {
		let word 
		let definition
		fetch('https://random-word-api.vercel.app/api?words=1')
			.then((response) => response.json())
			.then((response) => {
				word = response[0]
				console.log(word)
				fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
					.then((response) => response.json())
					.then((response) => {
					definition = response[0].meanings[0].definitions[0].definition
					let newGame = {word: word, hint: definition}
					newGame.filled = Array(newGame.word.length).fill("_")
					setGame(newGame)
					})
			})
	}
	function checkLetterInWord(letter) {
		removeLetter(letter)
    	if (game.word.toUpperCase().includes(letter)) {
      		let newGame = {...game}
      		newGame.filled = game.word.split("").map((el, index) => el.toUpperCase() === letter ? letter : game.filled[index])
      		setGame(newGame)
			if (newGame.filled.join('').toLowerCase() === game.word) {
				setWin(true)
			}
			setScore(score + 5)
    	} else {
      	setMistakes(mistakes + 1)
		setScore(score - 20)
    	}
  	}
	function removeLetter(letter) {
    	let newAlphabet = {...alphabet}
    	newAlphabet[letter] = true
    	setAlphabet(newAlphabet)
  	}
	function clearAlphabet() {
    	setAlphabet(generateLetterStatuses())
	}
	function restartGame() {
		getNewWord()
		setMistakes(0)
		clearAlphabet()
		setWin(false)
		setScore(100)
	}
  	return (
    	<div className="hangman">
      		<Hanger mistakes={mistakes}/>
			{mistakes === 5 || win 
				? <GameOver restart={restartGame} win={win}/>
				: <div className="game-play">
					<Solution game={game}/>
					<div className="game-play__handler">
						<Letters alphabet={alphabet} checked={checkLetterInWord} />
						<Scores scores={score} />
					</div>
				</div>
			}
    	</div>
  	);
}

export default App;
