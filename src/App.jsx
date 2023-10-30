import { useState } from "react";

export default function App() {
  const [showStory, newStory] = useState(false);
  const xs = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
  const ys = ["the soup kitchen", "Disneyland", "the White House"];
  const zs = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away",
  ];
  
  const [xItem, newXItem] = useState(randomValueFromArray(xs));
  const [yItem, newYItem] = useState(randomValueFromArray(ys));
  const [zItem, newZItem] = useState(randomValueFromArray(zs));
  const [name, newName] = useState("");
  const [ukus, setUkus] = useState("us");
  const [usPond, ukStones] = useState("300 pounds");
  const [usFahrenheit, ukCelsius] = useState("94 fahrenheit");

  function handleClickGenerateButton(event) {
    event.preventDefault();
    newXItem(randomValueFromArray(xs));
    newYItem(randomValueFromArray(ys));
    newZItem(randomValueFromArray(zs));
    console.log("did");

    const cname = document.querySelector(".changeName").value;

    if (ukus == "uk") {
      ukCelsius("34.4 celsius");
      ukStones("21.4 stones");
    } else {
      ukCelsius("94 fahrenheit");
      ukStones("300 pounds");
    }

    if (cname != "") {
      newName(cname);
    } else {
      newName("Bob");
    }

    newStory(true);
  }

  function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }

  function handleRadioChange(event) {
    setUkus(event.target.value);
  }

  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input type="text" placeholder="" className="changeName" />
      </div>
      <div>
        <form onSubmit={handleClickGenerateButton}>
          <div onChange={handleRadioChange}>
            <label htmlFor="us">US</label>
            <input type="radio" value="us" checked={ukus === "us"} />
            <label htmlFor="uk">UK</label>
            <input type="radio" value="uk" checked={ukus === "uk"} />
          </div>
          <div>
            <button type="submit">Generate random story</button>
          </div>
        </form>
      </div>

      {showStory && (
        <p>
          It was {usFahrenheit} outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}.
          {name} saw the whole thing, but was not surprised — {xItem} weighs{" "}
          {usPond}, and it was a hot day.
        </p>
      )}
    </>
  );
}
