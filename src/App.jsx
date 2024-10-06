import { useEffect, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Upgrades from "./components/Upgrades";

export default function App() {
  let [cookies, setCookies] = useState(0);
  let [cookiesPerSecond, setCookiesPerSecond] = useState(1);

  return (
    <>
      <h1>Return of the Cookie Clicker... </h1>
      <div id="main-container">
        <div id="start">
          <Start
            cookies={cookies}
            setCookies={setCookies}
            cookiesPerSecond={cookiesPerSecond}
            setCookiesPerSecond={setCookiesPerSecond}
          />
          <Timer
            cookies={cookies}
            setCookies={setCookies}
            cookiesPerSecond={cookiesPerSecond}
            setCookiesPerSecond={setCookiesPerSecond}
          />
        </div>
        <div id="upgrades-container">
          <Upgrades />
        </div>
      </div>
    </>
  );
}
