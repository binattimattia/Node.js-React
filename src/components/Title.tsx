import * as React from "react";

interface Title {
    title: string
    paragraph: string
}
export const Title: React.FC<Title> = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p className={"lead"}>{props.paragraph}</p>
        </div>
    );
};

export default Title;
