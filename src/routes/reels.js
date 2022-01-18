import '../index.css';
import Reel from '../components/reel'

export default function Reels() {
    return (
    <div className="wrapper">
      <Reel 
        vimeoId="667339024?h=9961e0cbb7"
        title="Dennis Hurley 2022 Acting Reel">
      </Reel>
      <Reel 
        vimeoId="666878542?h=cb5d912617"
        title="Dennis Hurley Mr. Freeze Proof of Concept">
      </Reel>
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