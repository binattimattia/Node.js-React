import { useState } from "react";
import ListComponent from "./ListComponent";

const ListContainer = () => {
  const [lists, setLists] = useState<{ id: number; items: string[] }[]>([
    { id: 1, items: [] },
    { id: 2, items: [] },
  ]);

  const addItem = (id: number, newItem: string) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === id ? { ...list, items: [...list.items, newItem] } : list
      )
    );
  };

  const removeItem = (id: number, index: number) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === id
          ? { ...list, items: list.items.filter((_, i) => i !== index) }
          : list
      )
    );
  };

  return (
    <div>
      {lists.map((list) => (
        <ListComponent
          key={list.id}
          listName={`Lista ${list.id}`}
          items={list.items}
          addItem={(newItem) => addItem(list.id, newItem)}
          removeItem={(index) => removeItem(list.id, index)}
        />
      ))}
    </div>
  );
};

export default ListContainer;
