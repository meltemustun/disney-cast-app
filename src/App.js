// https://api.disneyapi.dev/character

import Search from "./components/ui/Search";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";

import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(
        ` https://api.disneyapi.dev/character?name=${query}`
      );

      console.log(result.data.data);

      setItems(result.data.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  const queryFunction = (q) => {
    setQuery(q);
  };

  return (
    <div className="container">
      <Header />
      <Search getQuery={queryFunction} />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;
