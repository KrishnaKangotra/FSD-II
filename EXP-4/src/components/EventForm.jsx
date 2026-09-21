import { useState } from "react";

function EventForm({ onAddEvent }) {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !date || !time) {
      alert("Please fill all fields");
      return;
    }

    const newEvent = {
      id: Date.now(),
      title,
      platform,
      date,
      time,
    };

    onAddEvent(newEvent);

    setTitle("");
    setPlatform("Instagram");
    setDate("");
    setTime("");
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2>Add Scheduled Post</h2>

      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      >
        <option>Instagram</option>
        <option>Twitter</option>
        <option>Facebook</option>
        <option>LinkedIn</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button type="submit">Add Post</button>
    </form>
  );
}

export default EventForm;