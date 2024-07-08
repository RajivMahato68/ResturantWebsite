import { HomePage } from "./components";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <HomePage />
      </div>
    </Router>
  );
}

export default App;
