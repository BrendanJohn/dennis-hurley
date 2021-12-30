import './main-page.css';
import NewCarousel from "../carousel";

function App() {

  return (
    <div>
      <div className='d-flex justify-content-center'>
        <h1 className='tagline'>Dennis Hurley</h1>
      </div>
      <div className='d-flex justify-content-center'>
        <h3 className='tagline'><i>Actor, Writer, Comedian, Albino </i></h3>
      </div>
      <div className='d-flex justify-content-center'>
        <h3 className='tagline'>SAG-AFTRA</h3>
      </div>
      <NewCarousel></NewCarousel>
    </div>  
  );
}

export default App;
