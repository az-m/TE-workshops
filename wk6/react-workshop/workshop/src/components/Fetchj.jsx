import { useEffect, useState } from "react";

export default function Fetch() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );
      const data = await response.json();
      console.log(data);
      setItems(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Items from API</h2>
      {items.map((item) => (
        <img src={item.url} key={item.id} />
      ))}
    </div>
  );
}
