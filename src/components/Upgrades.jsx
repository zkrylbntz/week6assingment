import upgradesData from "../lib/upgradesData.json";
import "./Upgrades.css";
export default function Upgrades() {
  return upgradesData.map((upgrades) => (
    <div id="upgrades" key={upgrades.id}>
      {upgrades.name}
      {upgrades.cost}
      {upgrades.increase}
    </div>
  ));
}
