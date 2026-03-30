export interface Event {
  date: string;
  day: string;
  time: string;
  title: string;
  location: string;
}

export const upcomingEvents: Event[] = [
  {
    date: "7-Dec",
    day: "Sunday",
    time: "15:00 , 7-dec",
    title: "The title of the event",
    location: "Location",
  },
  {
    date: "14-Dec",
    day: "Saturday",
    time: "14:00 , 14-dec",
    title: "Another upcoming event",
    location: "Tashkent, Uzbekistan",
  },
];

export const pastEvents: Event[] = [
  {
    date: "15-Nov",
    day: "Friday",
    time: "18:00 , 15-nov",
    title: "DevPev Meetup #3",
    location: "Tashkent, Uzbekistan",
  },
  {
    date: "12-Oct",
    day: "Saturday",
    time: "15:00 , 12-oct",
    title: "Open Source Workshop",
    location: "Online",
  },
];
