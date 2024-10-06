import { useEffect, useState } from "react";
// import useTimer from "../utils/utilities";
// import { cookies } from "./Start";

// export default function Timer() {
//   const cookies = useTimer();
//   // console.log({ cookies });
//   return <div>Cookies per second: {cookies}</div>;
// }

export default function Timer({
  cookies,
  setCookies,
  cookiesPerSecond,
  setCookiesPerSecond,
}) {
  // const [cookiesPerSecond, setCookiesPerSecond] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCookies((currentCookies) => currentCookies + cookiesPerSecond);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [cookiesPerSecond, setCookies]);
  return <div>Cookies per second: {cookiesPerSecond}</div>;
}
// onClick={ () => { f1(); f2();} }
