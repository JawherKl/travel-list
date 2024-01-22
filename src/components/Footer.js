export default function Footer({ items }) {
  if (!items.length) {
    return (
      <div className="stats">
        <em>You can start adding items for your journey 🚀</em>
      </div>
    );
  }
  const numItems = items.length;
  const numItemsPacked = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((numItemsPacked / numItems) * 100);
  return (
    <div>
      <p className="stats">
        {percentagePacked === 100
          ? "You have gotten everything! Ready to go ✈"
          : `💼 You have ${numItems} items on your list, and you already packed
          ${numItemsPacked} (${percentagePacked}%)`}
      </p>
    </div>
  );
}
