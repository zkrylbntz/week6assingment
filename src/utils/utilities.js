// here you can write some functions that you can import to your components, if you wish
import { useEffect, useState } from "react";

export default function useTimer() {
  const [cookiesPerSecond, setCookiesPerSecond] = useState(0);
  useEffect(() => {
    const cookiesPerSecondInterval = setInterval(() => {
      setCookiesPerSecond((currentCookies) => currentCookies + 1);
    }, 1000);

    return () => {
      clearInterval(cookiesPerSecondInterval);
    };
  }, [cookiesPerSecond]);
  return cookiesPerSecond;
}
