import { useState } from "react";
import cookie from "../public/images/cookie.png";

import "./Start.css";

export default function Start() {
  let [cookies, setCookies] = useState(0);
  function handleCookies() {
    setCookies(cookies + 1);
  }

  return (
    <>
      <p>{cookies}</p>
      <p>Cookie clicks </p>
      <img id="big-cookie" onClick={handleCookies} src={cookie} />
    </>
  );
}

// onClick={ () => { f1(); f2();} }
