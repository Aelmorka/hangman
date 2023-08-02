export default function Solution({game}) {
    return (
        <div className="solution">
            <div className="solution__place">
                {game.filled.map((elm, index) => <span key={index}>{elm}</span>)}
            </div>
            <div className="solution__hint">
                {game.hint}
            </div>
        </div>
    )
}