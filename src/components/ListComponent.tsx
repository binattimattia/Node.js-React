import { useState } from "react";
import styles from "../styles/ListComponent.module.css";

interface ListComponentProps {
  listName: string;
  items: string[];
  addItem: (item: string) => void;
  removeItem: (index: number) => void;
}

export const ListComponent = ({ listName, items, addItem, removeItem }: ListComponentProps) => {
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim()) {
      addItem(newItem);
      setNewItem("");
    }
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
        <button onClick={handleAddItem} className={styles.button}>Aggiungi Elemento</button>
      </div>
      <ul className={styles.listItem}>
        {items.map((item, index) => (
          <li key={index} className={styles.listItem}>
            {item}
            <span onClick={() => removeItem(index)} className={styles.removeX}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
