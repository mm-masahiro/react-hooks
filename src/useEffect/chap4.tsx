import React, { useState, useEffect } from 'react';

type Props = {};

const Chap4: React.FC<Props> = () => {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    console.log(document.getElementById("effectHook")?.innerText);
  });

  return (
    <div>
      <p id="effectHook">You Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  )
}

export default Chap4
