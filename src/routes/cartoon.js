import '../index.css';
import Reel from '../components/reel'

export default function Cartoon() {
    return (
    <div className='wrapper'>
      <Reel 
        youtubeId='1ANI_22rQtI'
        title='The Script Supervisor - MODEL CITIZENS- Ep. 5'>
      </Reel>
      <Reel 
        vimeoId='153468982?h=ccf494b0f9'
        title='2016 Acting Reel'>
      </Reel>
    </div>
    );
  }