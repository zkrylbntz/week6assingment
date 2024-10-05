// import { useEffect, useState } from "react";
import useTimer from "../utils/utilities";
// import { cookies } from "./Start";

export default function Timer() {
  const cookies = useTimer();

  return <div>Cookies per second: {cookies}</div>;
}

// export default function Timer() {
//     const [cookiesPerSecond, setCookiesPerSecond] = useState(0);
//     useEffect(() => {
//       const interval = setInterval(() => {
//         setCookiesPerSecond((currentCookies) => currentCookies + 1);
//       }, 1000);
//       return () => {
//         clearInterval(interval);
//       };
//     }, []);
//     return <div>{cookiesPerSecond}</div>;
//   };
// }
// onClick={ () => { f1(); f2();} }
