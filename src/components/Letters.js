import Letter from './Letter'

export default function Letters({alphabet, checked}) {
    let rows = 3
    let alphArr = Object.keys(alphabet)
    let alphLen = alphArr.length  
    let numInRow = Math.ceil(alphLen / rows)
    let dividedAlphabet = Array(rows).fill([]).map((row, index) => {
        let num = index !== rows - 1 ? numInRow : alphLen  - numInRow * (rows - 1)
        return Array(num).fill(0).map((item, ind) => {
            item = alphArr[index*numInRow + ind]
            return item
        })
    })
    return (
        <div className="letters">
            {dividedAlphabet.map((el, index) => {
                return (
                    <div key={index} className="letters__row">
                        {el.map(letter => <Letter key={letter} letter={{name: letter, checked: alphabet[letter]}} check={checked}/>)}
                    </div>
                )
            })}
        </div>
    )
}