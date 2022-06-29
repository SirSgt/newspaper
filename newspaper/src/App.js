import "./App.css";
import { useState, useEffect } from "react";

const API_KEY = "1deddd564f26d5846aa8a73399dc28d1";
const BASE_URL = "https://newsapi.org/v2/";

function App() {
  const url = new URL(BASE_URL);
  // url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  const [resourceType, setResourceType] = useState("entertainment");
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?language=en&category=${resourceType}&apiKey=a054f774c64d4eaabddc89f621767f39`
    )
      .then((response) => response.json())
      .then((news) => setItems(news.articles))
      .catch((error) => {
        console.log(error);
      });
  }, [resourceType]);

  return (
    <div className="App">
      <button onClick={() => setResourceType("health")}>Health</button>
      <button onClick={() => setResourceType("entertainment")}>
        Entertainment
      </button>

      {items?.map((item, i) => (
        <div key={i}>
          <h3>{item.title}</h3>
          <img src={item.urlToImage} />
        </div>
      ))}
    </div>
  );
}

export default App;
