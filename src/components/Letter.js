export default function Letter({letter, check, remove}) {
    function chooseLetter() {
        check(letter.name)
        remove(letter.name)
    }
    return (
        <button onClick={chooseLetter} className="letters__btn" disabled={letter.checked ? "disabled" : false}>
            {letter.name}
        </button>
    )
}