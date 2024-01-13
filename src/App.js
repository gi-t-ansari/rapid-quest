import React from "react";
import Menu from "./components/Menu/Menu";
import Intro from "./components/Intro/Intro";
import Income from "./components/Income/Income";
import Strategy from "./components/Strategy/Strategy";

function App() {
  return (
    <main className="App">
        <Menu />
        <Intro />
        <Income />
        <Strategy />
    </main>
  );
}

export default App;
