export default function GameOver({restart, win}) {
    let btnClass = win ? 'win' : 'loose'
    return (
        <div className="game-over">
            {win
                ? <div>
                    <div className="firework firework1"></div>
                    <div className="firework firework2"></div>
                    <div className="firework firework3"></div>
                    <p className="game-over__win">You win</p>
                </div>
                : <p className="game-over__loose">Game over</p>
            }
            <button onClick={restart} className={btnClass}><span>New game</span></button>
        </div>
    )
}