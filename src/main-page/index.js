import { useEffect, useState, useMemo} from "react";
import './main-page.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);
  return (
    <Router>
      <div className="container">
      <NewCarousel></NewCarousel>
      </div>
    </Router>
  );
}

export default App;
