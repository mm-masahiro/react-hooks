// import React, { useEffect, useState } from 'react';

// const LIMIT = 60;

// const Timer: React.FC = () => {
//   const [timeLeft, setTimeLeft] = useState(LIMIT);

//   const reset = () => {
//     setTimeLeft(LIMIT);
//   };

//   const tick = () => {
//     console.log("tick");
//     setTimeLeft((prevTime) => (prevTime === 0 ? LIMIT : prevTime - 1));
//   };

//   useEffect(() => {
//     console.log('create timer');
//     const timerId = setInterval(tick, 1000);
//     return () => {
//       console.log('cleanup Timer')
//     }
//   }, [input])

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Timer
