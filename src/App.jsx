import { useState } from "react";

export default function App() {
  const [showStory, newStory] = useState(false);
  const xs = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
  const ys = ["the soup kitchen", "Disneyland", "the White House"];
  const zs = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
  const [xItem, newXItem] = useState(randomValueFromArray(xs));
  const [yItem, newYItem] = useState(randomValueFromArray(ys));
  const [zItem, newZItem] = useState(randomValueFromArray(zs));
  const [name,newName] = useState("");
  const [ukus,setUkus] = useState("us");

  function handleClickGenerateButton() {

    newXItem(randomValueFromArray(xs));
    newYItem(randomValueFromArray(ys));
    newZItem(randomValueFromArray(zs));

    const cname = document.querySelector(".changeName").value;
    if(cname != "")
    {
      newName(cname);
    }else
    {
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
        <input type="text" placeholder="" className="changeName"/>
        
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input type="radio" value="us" checked={ukus === "us"} onChange = {handleRadioChange} />
        <label htmlFor="uk">UK</label>
        <input type="radio" value="uk" checked={ukus === "uk"} onChange = {handleRadioChange} />
      </div>
      <div>
        <button onClick={handleClickGenerateButton}>Generate random story</button>
      </div>
      {showStory && (
        <p>
          It was {ukus === "us" ? "94 fahrenheit" : "34.4 celsius"} outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}. 
          {name} saw the whole thing, but was not surprised — {xItem} weighs {ukus == "us" ? "300 pounds"
           : "21.4 stones" }, and it was a hot day.
        </p>
      )}

    </>

  );
}