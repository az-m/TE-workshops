import { useState, useEffect } from "react";

export default function App() {
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    async function fetchFox() {
      const res = await fetch("https://randomfox.ca/floof/");
      const data = await res.json();
      setImgUrl(data.image);
    }

    fetchFox();

    const intervalId = setInterval(fetchFox, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <img src={imgUrl} style={{ maxWidth: "100%" }} />
    </div>
  );
}
