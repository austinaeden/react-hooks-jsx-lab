import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return (
    <div>
        <div id="home">
          <h1 style={{color:'firebrick'}}>{`${name} is a programer from ${city}`}</h1>
        </div>
    </div>
  );
}

export default Home;
