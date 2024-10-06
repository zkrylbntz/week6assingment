import { useEffect, useState } from "react";

export default function Timer({
  cookies,
  setCookies,
  cookiesPerSecond,
  setCookiesPerSecond,
}) {
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
