import './main-page.css';
import NewCarousel from "../carousel";

function App() {

  return (
    <div>
      <div className='d-flex justify-content-center videoTitle'>
        <h1 className='tagline'>Dennis Hurley</h1>
      </div>
      <div className='d-flex justify-content-center'>
        <h2 className='tagline'><i>Actor, Writer, Comedian, Albino </i></h2>
      </div>
      <div className='d-flex justify-content-center'>
        <h2 className='tagline'>SAG-AFTRA</h2>
      </div>
      <NewCarousel></NewCarousel>
    </div>  
  );
}

export default App;
