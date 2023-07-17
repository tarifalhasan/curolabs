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
];
