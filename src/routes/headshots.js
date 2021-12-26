import React from 'react';

export default function Headshots() {
    return (
      <div>
      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src="./images/headshotOne.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
      
          <img
            src="./images/headshotTwo.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </div>
      
        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="./images/headshotThree.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />
      
          <img
            src="./images/headshotFour.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>
      
        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="./images/headshotFive.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />
      
          <img
            src="./images/headshotOne.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
        </div>
      </div>
      </div>
    );
  }