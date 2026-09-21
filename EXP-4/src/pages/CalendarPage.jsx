import { useCallback, useMemo, useState } from "react";
import Calendar from "../components/Calendar";
import EventForm from "../components/EventForm";
import FilterBar from "../components/FilterBar";
import initialEvents from "../data/events";

function CalendarPage() {
  const [events, setEvents] = useState(initialEvents);
  const [platform, setPlatform] = useState("All");

  const addEvent = useCallback((newEvent) => {
    setEvents((currentEvents) => [
      ...currentEvents,
      newEvent,
    ]);
  }, []);

  const updateEventDate = useCallback((eventId, newDate) => {
    setEvents((currentEvents) =>
      currentEvents.map((event) =>
        event.id === eventId
          ? { ...event, date: newDate }
          : event
      )
    );
  }, []);

  const filteredEvents = useMemo(() => {
    if (platform === "All") {
      return events;
    }

    return events.filter(
      (event) => event.platform === platform
    );
  }, [events, platform]);

  return (
    <div className="page">
      <h1>Scheduled Posts Calendar</h1>

      <EventForm onAddEvent={addEvent} />

      <FilterBar
        platform={platform}
        onPlatformChange={setPlatform}
      />

      <Calendar
        events={filteredEvents}
        onEventDrop={updateEventDate}
      />
    </div>
  );
}

export default CalendarPage;