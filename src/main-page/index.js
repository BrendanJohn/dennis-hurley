import { useEffect, useState, useMemo} from "react";
import './main-page.css';
import { BrowserRouter as Router } from "react-router-dom";
import NewCarousel from "../carousel";

function App() {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  return (
    <Router>
      <div className="container">
      <NewCarousel></NewCarousel>
      </div>
    </Router>
  );
}

export default App;
