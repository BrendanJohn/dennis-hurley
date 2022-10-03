import './main-page.css';
import HomePageCarousel from "../carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Reel from "../components/reel";

function App() {

  return (
    <div>
      <div className='d-flex justify-content-center'>
        <h1 className='tagline'><strong>Dennis Hurley</strong></h1>
      </div>
      <div className='d-flex justify-content-center'>
        <h3 className='under-tag-line'><i>Actor, Writer, Comedian, Albino </i></h3>
      </div>
      <div className='d-flex justify-content-center'>
        <h3 className='under-tag-line'>SAG-AFTRA</h3>
      </div>
      <HomePageCarousel></HomePageCarousel>
      <Reel 
        vimeoId="667339024?h=9961e0cbb7"
        title="Dennis Hurley 2022 Acting Reel">
      </Reel>
      <Reel 
        vimeoId="666878542?h=cb5d912617"
        title="Dennis Hurley Mr. Freeze Proof of Concept">
      </Reel>
    </div>  
  );
}

export default App;
