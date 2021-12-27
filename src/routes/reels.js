import '../index.css';
import Reel from '../components/reel'

export default function Reels() {
    return (
    <div className="wrapper">
      <Reel 
        vimeoId="260102422?h=1bf416d551"
        title="2018 Acting Reel">
      </Reel>
      <Reel 
        vimeoId="153468982?h=ccf494b0f9"
        title="2016 Acting Reel">
      </Reel>
    </div>
    );
  }