import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main-page';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Reels from "./routes/reels";
import Calendar from "./routes/calendar";
import Resume from "./routes/resume";
import Headshots from "./routes/headshots";
import Audio from "./routes/audio";
import Cartoon from "./routes/cartoon";
import Standup from "./routes/standup";
import Impressions from "./routes/impressions";
import Bio from "./routes/bio";
import Press from "./routes/press";
import Podcasts from "./routes/podcasts";
import Sketches from "./routes/sketches";
import Testimonials from "./routes/testimonials";
import Contact from "./routes/contact";
import Charity from "./routes/charity";
import Socials from "./components/socials";
import Header from "./components/header";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className="container">
    <Header></Header>
    <Routes>
          <Route path="/" element={<App />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="resume" element={<Resume />} />
          <Route path="headshots" element={<Headshots />} />
          <Route path="reels" element={<Reels />} />
          <Route path="audio" element={<Audio />} />
          <Route path="cartoon" element={<Cartoon />} />s
          <Route path="standup" element={<Standup />} />
          <Route path="impressions" element={<Impressions />} />
          <Route path="bio" element={<Bio />} />
          <Route path="press" element={<Press />} />
          <Route path="podcasts" element={<Podcasts />} />
          <Route path="sketches" element={<Sketches />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
          <Route path="charity" element={<Charity />} />
    </Routes>
    <Socials></Socials>
    </div>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
