import './main-page.css';
import { BrowserRouter as Router } from "react-router-dom";
import NewCarousel from "../carousel";
import Socials from "../components/socials";
import Header from "./header";


function App() {

  return (
    <Router>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className="container">
        <Header></Header>
        <Socials></Socials>
        <NewCarousel></NewCarousel>
      </div>
    </Router>
  );
}

export default App;
