import './main-page.css';
import NewCarousel from "../carousel";

function App() {

  return (
    <div>
      <div className='d-flex justify-content-center'>
        <h1 className='tagline'><strong>Dennis Hurley</strong></h1>
      </div>
      <div className='d-flex justify-content-center'>
        <h3><i>Actor, Writer, Comedian, Albino </i></h3>
      </div>
      <div className='d-flex justify-content-center'>
        <h3>SAG-AFTRA</h3>
      </div>
      <NewCarousel></NewCarousel>
    </div>  
  );
}

export default App;
