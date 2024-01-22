export default function Item({ item, onDeleteItems, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.id}
        onChange={() => {
          onToggleItems(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
