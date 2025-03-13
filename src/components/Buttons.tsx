import * as React from "react";

interface Buttons {
    button: string;
}

export const Buttons: React.FC<Buttons> = (props) => {
    const greetings = () => {
        const name = prompt("What's your name? ");
        if (name) {
            alert(`Hello, ${name}, welcome to my first react app!`);}
        }
    return (
        <div>
            <button className="btn btn-primary" onClick={greetings}>
                {props.button}
            </button>
        </div>
    )
}

export default Buttons;