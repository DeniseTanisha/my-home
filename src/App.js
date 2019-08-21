import React from "react";
import "./App.css";
import SundayArt from "./SundayArt/SundayArt";
import elephant from "./assets/elephant.png";

function App() {
  return (
    <div className="App">
      <section className="content">
        <h1 className="title"> Welcome to Denise's World</h1>
        <img src={elephant} className="elephant" />

        <section className="links">
          <SundayArt />
          {/* <svg height="210" width="500">
            <line
              x1="0"
              y1="0"
              x2="200"
              y2="200"
              style="stroke:rgb(255,0,0);stroke-width:2"
            />
          </svg> */}
        </section>
      </section>
    </div>
  );
}

export default App;
