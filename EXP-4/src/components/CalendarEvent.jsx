import React from "react";

const CalendarEvent = React.memo(function CalendarEvent({ event, onDragStart }) {
  return (
    <div
      className="calendar-event"
      draggable
      onDragStart={(e) => onDragStart(e, event)}
    >
      <strong>{event.title}</strong>
      <span>{event.platform}</span>
      <small>{event.time}</small>
    </div>
  );
});

export default CalendarEvent;