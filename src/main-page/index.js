import './main-page.css';
import NewCarousel from "../carousel";

function App() {

  return (
    <div>
      <div className='d-flex justify-content-center videoTitle'>
          <h2 className='tagline'><i>Actor, Writer, Comedian, Albino.</i></h2>
      </div>
      <NewCarousel></NewCarousel>
    </div>
  );
}

export default App;
