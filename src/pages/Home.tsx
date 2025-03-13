import Title from "../components/Title.tsx";
import Buttons from "../components/Buttons.tsx";

export const Home = () => {
    return (
        <>
        <Title title={"La mia prima app con React!"} paragraph={"Clicca questo bottone per ricevere un saluto"}></Title>
        <Buttons button={"Click me!"}></Buttons>
        </>
    )
}

export default Home;