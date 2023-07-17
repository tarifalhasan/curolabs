import { Card, Typography } from '@material-tailwind/react';
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
const events = [
  // Your existing events...
  // Add a new event for today that ends at midnight
  {
    id: 1,
    titleThread: '$62.9k',
    eventName: '2 trades',
    start: new Date(),
    end: new Date(new Date().setHours(24, 0, 0, 0)),
    // You can customize other properties of the event if needed
  },
  {
    id: 2,
    titleThread: '$42.9k',
    eventName: '3 trades',
    start: new Date(2023, 6, 2, 10, 0), // Example start date and time
    end: new Date(2023, 6, 2, 12, 0), // Example end date and time
  },
  {
    id: 3,
    titleThread: '$162.9k',
    eventName: '6 trades',
    start: new Date(2023, 6, 6, 10, 0), // Example start date and time
    end: new Date(2023, 6, 6, 12, 0), // Example end date and timed time
  },
  {
    id: 4,
    titleThread: '$162.9k',
    eventName: '6 trades',
    start: new Date(2023, 6, 19, 10, 0), // Example start date and time
    end: new Date(2023, 6, 19, 12, 0), // Example end date and timed time
  },
];
const customEventTitle = ({ event }) => (
  <div>
    <span>{event.titleThread}</span>
    <br />
    <span>{event.eventName}</span>
  </div>
);

const formatEvents = events =>
  events.map(event => ({
    ...event,
    title: (
      <div>
        <span>{event.titleThread}</span>
        <br />
        <span>{event.eventName}</span>
      </div>
    ),
  }));

const Calender = () => {
  const formattedEvents = formatEvents(events);

  return (
    <Card className="overflow-scroll h-full w-full no-scroll p-[10px]">
      <div className="flex items-center justify-between px-3 pt-2">
        <Typography className="text-[20px] font-[600] mb-[-37px]">
          Calendar
        </Typography>
      </div>
      <Calendar
        localizer={localizer}
        events={formattedEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        step={60}
        components={{
          event: customEventTitle,
        }}
      />
    </Card>
  );
};

export default Calender;
