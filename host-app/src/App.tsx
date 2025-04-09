import "./styles.css";
import React from 'react';
import { RoutesComponent } from "./Routes/Routes";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <RoutesComponent />
    </div>
  );
}
