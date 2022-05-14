import React from "react";
import "./App.css";
import { TickectForm } from "./ticketGenerate/newTicketGenerate";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <TickectForm />
      </Router>
    </div>
  );
}

export default App;
