import React, { useState, useEffect } from 'react';
import axios from "axios";

const Chap4 = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([])
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
  }, []);

  return (
    <>
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
