import Title from "../components/Title.tsx";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ListComponent from "../components/ListComponent.tsx";
import styles from "../styles/Home.module.css";

interface List {
  id: number;
  name: string;
  items: string[];
}

const Home = () => {
  const [lists, setLists] = useState<List[]>([]);
  const [newListText, setNewListText] = useState("");

  const addList = () => {
    if (newListText.trim()) {
      const newList = { id: Date.now(), name: newListText, items: [] };
      setLists([...lists, newList]);
      setNewListText("");
    }
  };

  const removeList = (id: number) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  const addItemToList = (id: number, item: string) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === id ? { ...list, items: [...list.items, item] } : list
      )
    );
  };

  const removeItemFromList = (id: number, index: number) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === id
          ? { ...list, items: list.items.filter((_, i) => i !== index) }
          : list
      )
    );
  };

  return (
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
        <button onClick={addList} className={styles.button}>
          Aggiungi Lista
        </button>
      </div>

      <div className={styles.listContainer}>
        {lists.length > 0 && (
          <ul>
            {lists.map((list) => (
              <li key={list.id} className={styles.listItem}>
                <ListComponent
                  listName={list.name}
                  items={list.items}
                  addItem={(item) => addItemToList(list.id, item)}
                  removeItem={(index) => removeItemFromList(list.id, index)}
                />
                <button onClick={() => removeList(list.id)} className={styles.removeButton}>
                  Rimuovi la lista
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
