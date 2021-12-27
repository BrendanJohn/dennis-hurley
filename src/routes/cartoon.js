import '../index.css';
import Reel from '../components/reel'

export default function Cartoon() {
    return (
    <div className='wrapper'>
      <div className='d-flex justify-content-center videoTitle'>
            <h3></h3>
      </div>
      <Reel 
        youtubeId='1ANI_22rQtI'
        title='The Script Supervisor - MODEL CITIZENS- Ep. 5'>
      </Reel>
      <Reel 
        youtubeId='7HQug2bwczQ'
        title='Clown Ringtone - MODEL CITIZENS- Ep. 6'>
      </Reel>
      <Reel 
        youtubeId='yIfotpYScFo'
        title='The Sourdough Boy - MODEL CITIZENS- Ep. 7'>
      </Reel>
      <Reel 
        youtubeId='naWdC0jpxFs'
        title='IT: The "Interactive" Movie!'>
      </Reel>
    </div>
    );
  }