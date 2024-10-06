import { useState } from "react";
import cookie from "../public/images/cookie.png";

import "./Start.css";

export default function Start({
  cookies,
  setCookies,
  cookiesPerSecond,
  setCookiesPerSecond,
}) {
  // let [cookies, setCookies] = useState(0);
  function handleCookies() {
    setCookies(cookies + 1);
  }

  return (
    <>
      <img id="big-cookie" onClick={handleCookies} src={cookie} />
      <p>Cookies: {cookies}</p>
    </>
  );
}

// onClick={ () => { f1(); f2();} }
