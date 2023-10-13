import "./styles.css";
import { MeiliSearch } from "meilisearch";
import { useState } from "react";
export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const client = new MeiliSearch({
    host: "", // host and api key from meilsearch cloud
    apiKey: ""
  });

  const searchMovies = async (e) => {
    client
      .index("Movies")
      .search(e.target.value, {
        limit: 10 // change this to limit search reults
      })
      .then((results) => {
        setSearchResults(results.hits);
        console.log(results);
      });
  };

  return (
    <div className="App">
      {/* <title>Meiliesearch Demo</title> */}
      <h1>Hii</h1>
      <h1>Search your favorite movies</h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        onChange={(e) => searchMovies(e)}
      />
      {searchResults.map((resource) => (
        <div key={resource.id}>
          
          <img
            src={resource.poster}
            alt={resource.name}
            width={200}
            height={300}
          />
          <h3>{resource.title}</h3>
          <p>{resource.overview.substring(0, 50)}...</p>
        </div>
      ))}
    </div>
  );
}
