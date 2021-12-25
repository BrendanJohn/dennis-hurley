import './main-page.css';
import NewCarousel from "../carousel";
import Socials from "../components/socials";
import Header from "./header";


function App() {

  return (
    <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div className="container">
          <Header></Header>
          <NewCarousel></NewCarousel>
          <Socials></Socials>
        </div>
      </div>
  );
}

export default App;
