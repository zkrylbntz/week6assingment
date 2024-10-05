import { useState } from "react";

export default function Addition() {
  let [addCookies, setAddCookies] = useState(0);
  function plusCookies() {
    setAddCookies(cookies + cookiesPerSecond);
  }
  return (
    <>
      <p>Cookies together: {plusCookies} </p>
    </>
  );
}
