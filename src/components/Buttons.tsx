
export const Buttons = () => {
    const greetings = () => {
        const name = prompt("What's your name? ");
        if (name) {
            alert(`Hello, ${name}, welcome to my first react app!`);}
        }
    return (
        <div>
            <button className="btn btn-primary" onClick={greetings}>
                Click me!
            </button>
        </div>
    )
}

export default Buttons;