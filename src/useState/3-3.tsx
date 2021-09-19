import React, { useState } from 'react';

const Chap33 = () => {
  const [items, setItems] = useState([ { "name": "kinoko" }]);

  const addItem = () => {
    const newItem = {
      name: Math.random() > 0.5 ? 'kinoko' : 'takenoko'
    };

    setItems([
      ...items,
      newItem,
    ]);
  };

  const delteItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  }

  return (
    <div>
      <button onClick={addItem}>add takenoko or kinoko</button>    
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={() => delteItem(index)}>Delte</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Chap33;
