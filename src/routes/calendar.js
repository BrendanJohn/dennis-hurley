import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';

export default function Calendar() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <ReactEmbeddedGoogleCalendar publicUrl ="https://calendar.google.com/calendar/embed?src=dennisjhurleyla%40gmail.com&ctz=America%2FNew_York"/>
      </main>
    );
  }