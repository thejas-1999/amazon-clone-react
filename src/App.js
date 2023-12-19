import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Route path="/">
          {/* Header */}
          <Header />
          {/* Home */}
          <Home />
        </Route>
      </div>
    </Router>
  );
}

export default App;
