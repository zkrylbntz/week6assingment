import { useEffect, useState } from "react";
// import Addition from "./components/Addition";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Upgrades from "./components/Upgrades";
// import "./App.css";
// import { cookies } from "./components/Timer";
// I am going to write all my notes in this component

// You SHOULD divide my notes and tasks into different components whenever possible

export default function App() {
  // we need two states to store the cookies and cookiesPerSecond
  let [cookies, setCookies] = useState(0);
  let [cookiesPerSecond, setCookiesPerSecond] = useState(1);
  // we need an interval managed by useEffect

  // useEffect(() => {
  //   const cookiesPerSecondInterval = setInterval(() => {
  //     setCookies((currentCookies) => currentCookies + cookiesPerSecond);
  //   }, 1000);

  //   return () => {
  //     clearInterval(cookiesPerSecondInterval);
  //   };
  // }, [cookiesPerSecond]);

  //we need to give the upgrades some logic
  // the logic is that when the user buys an upgrade, the cookies number goes down, and the cookiesPerSecond number goes up
  return (
    <>
      <h1>Return of the Cookie Clicker... </h1>
      {/* <div>{cookies}</div> */}
      {/* we need an event to listen to the click on this image */}
      {/* we need to render the cookies number and the cookiesPerSecond number */}
      {/* we need to render our upgrades shop in here using a new friend - map */}
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
