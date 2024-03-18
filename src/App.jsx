import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  const changeColor = (color) => {
    setColor(color);
  };
  return (
    <div style={{backgroundColor: color}}>
      <h1
      style={{color: 'white', fontWeight: 'bold', fontSize: 25, textAlign: 'center', paddingTop: 200}}
      >
        A Background Changer</h1>
      <div
        className="w-full h-screen duration-200"
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => changeColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green", fontWeight: "w800" }}
            >
              green
            </button>
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white  shadow-lg"
              style={{ backgroundColor: "red", fontWeight: "w800" }}
            >
              red
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white  shadow-lg"
              style={{ backgroundColor: "blue", fontWeight: "w800" }}
            >
              blue
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-full text-white  shadow-lg"
              style={{ backgroundColor: "purple", fontWeight: "w800" }}
            >
              purple
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white  shadow-lg"
              style={{ backgroundColor: "orange", fontWeight: "w800" }}
            >
              orange
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

