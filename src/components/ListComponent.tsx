import { useState } from "react";
import styles from "../styles/ListComponent.module.css"; 

export const ListComponent = ({ listName }: { listName: string }) => {
    const [items, setItems] = useState<string[]>([]);
    const [newItem, setNewItem] = useState("");
  
    const addItem = () => {
      if (newItem.trim()) {
        setItems([...items, newItem]);
        setNewItem("");
      }
    };
  
    return (
      <div className="list">
        <h2>{listName}</h2>
        <div>
          <input
            className={styles.input}
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Aggiungi un elemento"
          />
          <button onClick={addItem} className={styles.button}>Aggiungi Elemento</button>
        </div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };
export default ListComponent