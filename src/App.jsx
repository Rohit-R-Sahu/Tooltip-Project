import { useState } from "react"; //imported useState Hook
import "./App.css"; //imported to add styles
import { Tooltip } from "react-tooltip"; //npm package to manage tooltip

function App() {
  //created a state to update position 
  const [place, setPlace] = useState("right");

  //created a function to update state as per position input from user
  function updateData(n) {
    let p = n.target.value;
    setPlace(p);
  }
  return (
    <div>
      {/* Created a label for option menu to select position of tooltop */}
      <label htmlFor="place">Select a Position : </label>
      {/* Added different position using select tag and used onchange attribute to take input of position from user and update state using function updateData() */}
      <select name="place" id="place" onChange={updateData}>
        <option value={"top"}>Top</option>
        <option value={"right"}>Right</option>
        <option value={"left"}>Left</option>
        <option value={"bottom"}>Bottom</option>
      </select>
      {/* used data-tooltip-id to pass id to tooltip component and data-tooltip-content to add component */}
      <h2
        data-tooltip-id={"my-tooltip"}
        data-tooltip-content={"Hello World..!!!"}
      >
        Hover over me
      </h2>
      {/* added Tooltip component and added place attribute along with state to update the postion of tooltip */}
      <Tooltip
        id="my-tooltip"
        place={place}
      />
    </div>
  );
}

export default App;
