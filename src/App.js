import { Header } from "./Components/Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TinderCards } from "./Components/TinderCards";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I am the chatpag</h1>
            {/* Chats screen */}
            {/* individual chat screen */}
          </Route>
          <Route path="/">
            <TinderCards />
            {/* Tinder Cards */}
            {/* Buttons below tinder cards */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
