import React from "react";
import { username, city } from "../data/data";
import { username2, city2 } from "../data/user";


function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}
export default Home;