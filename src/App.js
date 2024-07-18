import { useState } from "react";
import "./index.css";

function App() {
  const [values, setValues] = useState({
    red: 0,
    green: 0,
    blue: 0,
    size: 30,
  });

  let textStyles = {
    fontSize: `${values.size}px`,
    fill: `rgb(${values.red}, ${values.green}, ${values.blue})`,
  };

  console.log(values);
  return (
    <div className="App">
      <div className="contentContainer">
        <svg
          height="242"
          viewBox="0 0 242 242"
          // fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="121" cy="121" r="120.5" stroke="white" id="circle" />

          <text>
            <textPath href="#circle" style={textStyles} fill="white">
              LONDON / SEOUL / NEWYORK / TOKYO / PARIS / RIO
            </textPath>
          </text>
        </svg>

        <div className="sliderContainer">
          <div className="red">
            <h3>r</h3>
            <input
              type="range"
              min="0"
              max="255"
              onChange={(e) => setValues({ ...values, red: e.target.value })}
            />
          </div>

          <div className="green">
            <h3>g</h3>
            <input
              type="range"
              min="0"
              max="255"
              onChange={(e) => {
                setValues({ ...values, green: e.target.value });
              }}
            />
          </div>

          <div className="blue">
            <h3>b</h3>
            <input
              type="range"
              min="0"
              max="255"
              onChange={(e) => {
                setValues({ ...values, blue: e.target.value });
              }}
            />
          </div>

          <div className="size">
            <h3>s</h3>
            <input
              type="range"
              min="0"
              max="255"
              onChange={(e) => {
                setValues({ ...values, size: e.target.value });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
