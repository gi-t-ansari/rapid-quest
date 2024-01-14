import React, { useState } from "react";
import Menu from "./components/Menu/Menu";
import Intro from "./components/Intro/Intro";
import Income from "./components/Income/Income";
import Strategy from "./components/Strategy/Strategy.jsx"
// import RouteComponent from "./components/Route/RouteComponent";
// import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <main className="App1">
        <Menu />
        <Intro />
        <Income />
        <Strategy />
      </main>
      <main className="App2">
        <Menu />
        <Intro />
        <Income />
        <Strategy />
        {/* <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<Menu />}/>
            </Route>
          </Routes>
        </BrowserRouter> */}
      </main>
    </>
  );
}

export default App;
