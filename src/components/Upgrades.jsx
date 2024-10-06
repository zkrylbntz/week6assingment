import upgradesData from "../lib/upgradesData.json";
import "./Upgrades.css";

export default function Upgrades() {
  return upgradesData.map((upgrades) => (
    <div id="upgrades" key={upgrades.id}>
      <div className="name-container">
        <p>{upgrades.name}</p>
      </div>
      <div className="cost-container">
        <p>{upgrades.cost}</p>
      </div>
      <div className="increase-container">
        <p>{upgrades.increase}</p>
      </div>
      <button>Buy Upgrade</button>
    </div>
  ));
}
