import { useState } from 'react'
import enAlphabet from './alphabet.json'
import Letter from './Letter'
import Input from './Input'

export default function Letters({checked}) {
    let [alphabet, setAlphabet] = useState(enAlphabet)
    let [rows, setRows] = useState(4)
    let numInRow = Math.ceil(alphabet.letters.length / rows)
    let dividedAlphabet = Array(rows).fill([]).map((row, index) => {
        let num = index !== rows - 1 ? numInRow : alphabet.letters.length - numInRow * (rows - 1)
        return Array(num).fill(0).map((item, ind) => {
            item = alphabet.letters[index*numInRow + ind]
            return item
        })
    })
    function removeLetter(letter) {
    	let newAlphabet = {...alphabet}
    	let index = newAlphabet.letters.findIndex(el => el.name === letter)
    	newAlphabet.letters[index].checked = true
    	setAlphabet(newAlphabet)
  	}
    return (
        <div className="letters">
            {dividedAlphabet.map((el, index) => {
                return (
                    <div key={index} className="letters__row">
                        {el.map(letter => <Letter key={letter.name} letter={letter} check={checked} remove={removeLetter}/>)}
                    </div>
                )
            })}
            <div className="settings">
                <Input value={rows}/>    
            </div>
        </div>
    )
}