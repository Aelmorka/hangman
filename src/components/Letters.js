import { useState } from 'react'
import Letter from './Letter'
import Input from './Input'

export default function Letters({alphabet, checked}) {
    let [rows, setRows] = useState(4)
    let numInRow = Math.ceil(alphabet.length / rows)
    let dividedAlphabet = Array(rows).fill([]).map((row, index) => {
        let num = index !== rows - 1 ? numInRow : alphabet.length - numInRow * (rows - 1)
        return Array(num).fill(0).map((item, ind) => {
            item = alphabet[index*numInRow + ind]
            return item
        })
    })
    return (
        <div className="letters">
            {dividedAlphabet.map((el, index) => {
                return (
                    <div key={index} className="letters__row">
                        {el.map(letter => <Letter key={letter.name} letter={letter} check={checked}/>)}
                    </div>
                )
            })}
            <div className="settings">
                <Input value={rows}/>    
            </div>
        </div>
    )
}