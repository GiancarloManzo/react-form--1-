import { useState } from "react";

function App() {
  const [articles, setArticles] = useState([
    { id: 1, title: "primo articolo" },
    { id: 2, title: "secondo articolo" },
    { id: 3, title: "terzo articolo" },
  ]);
  const [newTitle, setNewTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (newTitle.trim() === "") return;

    const newArticle = {
      id: Date.now(),
      title: newTitle.trim(),
    };
    setArticles([...articles, newArticle]);
    setNewTitle("");
  }
  return (
    <div>
      <h1>Blog</h1>|
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titolo nuovo articolo..."
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
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
