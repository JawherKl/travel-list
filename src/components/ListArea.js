import { useState } from "react";
import Item from "./Item";

export default function ListArea({
  items,
  onDeleteItems,
  onToggleItems,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
            onClearItems={onClearItems}
          />
        ))}
      </ul>
      {items.length !== 0 ? (
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by Input</option>
            <option value="description">Sort by Description</option>
            <option value="packed">Sort by Packed</option>
          </select>
          <button onClick={onClearItems}>Clear Items</button>
        </div>
      ) : null}
    </div>
  );
}
