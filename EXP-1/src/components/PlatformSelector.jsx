function PlatformSelector({ selectedPlatform, setSelectedPlatform }) {
  return (
    <div className="card">
      <h2>Select Platform</h2>

      <div className="platform-list">

        <label className="platform-option">
          <input
            type="radio"
            name="platform"
            value="X"
            checked={selectedPlatform === "X"}
            onChange={(e) => setSelectedPlatform(e.target.value)}
          />
          🐦 X (Twitter)
        </label>

        <label className="platform-option">
          <input
            type="radio"
            name="platform"
            value="Instagram"
            checked={selectedPlatform === "Instagram"}
            onChange={(e) => setSelectedPlatform(e.target.value)}
          />
          📸 Instagram
        </label>

        <label className="platform-option">
          <input
            type="radio"
            name="platform"
            value="LinkedIn"
            checked={selectedPlatform === "LinkedIn"}
            onChange={(e) => setSelectedPlatform(e.target.value)}
          />
          💼 LinkedIn
        </label>

        <label className="platform-option">
          <input
            type="radio"
            name="platform"
            value="Facebook"
            checked={selectedPlatform === "Facebook"}
            onChange={(e) => setSelectedPlatform(e.target.value)}
          />
          📘 Facebook
        </label>

      </div>
    </div>
  );
}

export default PlatformSelector;