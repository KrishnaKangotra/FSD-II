import React from "react";

function FilterBar({ platform, onPlatformChange }) {
  return (
    <div className="filter-bar">
      <label htmlFor="platform-filter">Filter by platform:</label>

      <select
        id="platform-filter"
        value={platform}
        onChange={(e) => onPlatformChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Instagram">Instagram</option>
        <option value="Twitter">Twitter</option>
        <option value="Facebook">Facebook</option>
        <option value="LinkedIn">LinkedIn</option>
      </select>
    </div>
  );
}

export default React.memo(FilterBar);