import { NavBar, Footer } from "./components";



import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
