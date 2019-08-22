import React from "react";
import "./App.css";
import SundayArt from "./SundayArt/SundayArt";
import leaves from "./assets/leaves2.gif";

function App() {
  return (
    <div className="App">
      <h1 className="title"> Welcome to Denise's World</h1>
      <img src={leaves} className="leaves" />

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
    </div>
  );
}

export default App;
