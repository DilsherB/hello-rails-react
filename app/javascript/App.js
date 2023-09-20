import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Greeting from "./components/Greeting";

function App() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    fetch("/random_greeting")
      .then((response) => response.json())
      .then((data) => setGreeting(data.greeting));
  }, []);

  return (
    <Router>
      <Route path="/" component={Greeting} />
    </Router>
  );
}

export default App;
