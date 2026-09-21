import React, { useMemo } from "react";
import CalendarEvent from "./CalendarEvent";

function Calendar({ events, onEventDrop }) {
  const dates = useMemo(() => {
    const result = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      result.push({
        value: date.toISOString().split("T")[0],
        label: date.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
      });
    }

    return result;
  }, []);

  const handleDragStart = (e, event) => {
    e.dataTransfer.setData("eventId", event.id);
  };

  const handleDrop = (e, date) => {
    e.preventDefault();

    const eventId = Number(e.dataTransfer.getData("eventId"));

    onEventDrop(eventId, date);
  };

  return (
    <div className="calendar">
      {dates.map((date) => {
        const dayEvents = events.filter(
          (event) => event.date === date.value
        );

        return (
          <div
            className="calendar-day"
            key={date.value}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, date.value)}
          >
            <div className="day-header">
              {date.label}
            </div>

            <div className="day-events">
              {dayEvents.map((event) => (
                <CalendarEvent
                  key={event.id}
                  event={event}
                  onDragStart={handleDragStart}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default React.memo(Calendar);