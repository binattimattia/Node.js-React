import Title from "../components/Title.tsx";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import ListComponent from "../components/ListComponent.tsx";
import styles from "../styles/Home.module.css"; 

export const Home = () => {
    const [lists, setLists] = useState<string[]>([]);
    const [newListText, setNewListText] = useState("");

    const addList = () => {
        if (newListText.trim()) {
            setLists([...lists, newListText]);
            setNewListText("");
        }
    };

    return (
        <>
            <div className={styles.container}>
                <Title title={"Crea la tua lista della spesa!"} paragraph={"Clicca 'aggiungi lista' per creare una nuova lista"} />
                
                <div className={styles.inputContainer}>
                    <input 
                        type="text"
                        value={newListText}
                        onChange={(e) => setNewListText(e.target.value)}
                        placeholder="Aggiungi una nuova lista"
                        className={styles.inputField} 
                    />
                    <button 
                        onClick={addList} 
                        className={styles.button}
                    >
                        Aggiungi Lista
                    </button>
                </div>

                <div className={styles.listContainer}>
                    {lists.length > 0 && (
                        <ul>
                            {lists.map((list, index) => (
                                <li key={index} className={styles.listItem}>
                                    <ListComponent listName={list} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
};

export default Home;