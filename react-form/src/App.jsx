import { useState } from "react";

function App() {
  const [articles, setArticles] = useState([
    { id: 1, title: "primo articolo" },
    { id: 2, title: "secondo articolo" },
    { id: 3, title: "terzo articolo" },
  ]);
  return (
    <div>
      <h1>Blog</h1>|
      <form>
        <input type="text" placeholder="Titolo nuovo articolo..." />
        <button type="submit">Aggiungi</button>
      </form>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
