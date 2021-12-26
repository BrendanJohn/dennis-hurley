import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';

export default function Calendar() {
    return (
      <div className="container">
        <ReactEmbeddedGoogleCalendar publicUrl ="https://calendar.google.com/calendar/embed?src=dennisjhurleyla%40gmail.com&ctz=America%2FNew_York" height= '600px'/>
        </div>
    );
  }