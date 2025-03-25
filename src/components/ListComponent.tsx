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

    const removeItem = (index: number) => {
      const updatedItems = items.filter((_, i) => i !== index);
      setItems(updatedItems);
    };

    return (
      <div>
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
        <ul className={styles.listItem}>
          {items.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {item}
              <span 
                onClick={() => removeItem(index)} 
                className={styles.removeX}
              >
              &times;
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default ListComponent;
