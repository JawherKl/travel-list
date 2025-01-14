import { useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import ListArea from "./ListArea";
import Footer from "./Footer";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearItems() {
    let confirmed = window.confirm("Are you sure you want to clear items?");
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Header />
      <Nav onAddItems={handleAddItems} />
      <ListArea
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItems}
        onClearItems={handleClearItems}
      />
      <Footer items={items} />
    </div>
  );
}