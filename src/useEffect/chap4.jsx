import React, { useState, useEffect } from 'react';
import axios from "axios";

const Chap4 = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState("react");

  // クエリパラメータ
  const [query, setQuery] = useState(inputValue);
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      // const result = await axios.get(
      //   "https://hn.algolia.com/api/v1/search?query=react"
      // ).then((res) => {
      //   console.log(res.data.hits)
      // });

      const result = await axios.get(
        "https://hn.algolia.com/api/v1/search?query=react"
      );

      setItems(result.data.hits);
      
      setIsLoading(false);
    };

    fetchData();
  }, [query]);

  return (
    <>
      <form onSubmit={(event) => {
        event.preventDefault();
        setQuery(inputValue);
      }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type='submit'>検索</button>
      </form>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Chap4
