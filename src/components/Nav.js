import { useState } from "react";

export default function Nav({ onAddItems }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { description, quantity, id: Date.now() };
    onAddItems(newItem);
    if (!description) {
      alert("Enter an item!");
      return;
    }
    setDescription("");
    setQuantity(1);
  }

  return (
    <div>
      <h3>What items would you like to add ❓</h3>
      <form className="add-form" onSubmit={handleSubmit}>
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Items"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}
