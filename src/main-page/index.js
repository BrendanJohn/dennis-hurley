import './main-page.css';
import NewCarousel from "../carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

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
      <NewCarousel></NewCarousel>
    </div>  
  );
}

export default App;
