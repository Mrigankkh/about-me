import React from "react";
import About from "./About";
import Greetings from "./Greetings";
import Journey from "./Journey";
import Connect from "./Connect";
function Home() {
  return (
    <section>
      <Greetings />
      <About />
      <Journey />
      <Connect />
    </section>
  );
}

export default Home;
