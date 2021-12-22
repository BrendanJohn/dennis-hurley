import './main-page.css';
import { BrowserRouter as Router } from "react-router-dom";
import NewCarousel from "../carousel";

function App() {

  return (
    <Router>
      <div className="container">
      <NewCarousel></NewCarousel>
      </div>
    </Router>
  );
}

export default App;
