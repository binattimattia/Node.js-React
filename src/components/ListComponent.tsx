import { useState } from "react";

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
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Aggiungi un elemento"
          />
          <button onClick={addItem}>Aggiungi Elemento</button>
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