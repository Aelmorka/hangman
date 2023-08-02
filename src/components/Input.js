export default function Input({value}) {
    return (
        <div className="settings__input">
            <button>less</button>
            <input dafaultvalue={value} />
            <button>more</button>
        </div>
    )
}