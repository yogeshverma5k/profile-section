import { useState } from "react";
import "./index.css";

function App() {
  const [following, setFollowing] = useState(false);

  return (
    <div className="container">
      <div className="profile-card">

        <img
          className="profile-img"
          src="https://i.pravatar.cc/300"
          alt="Profile"
        />

        <h1>Yogesh Verma</h1>

        <h3>React Developer</h3>

        <p className="bio">
          I am a passionate developer learning React
          and building modern web applications.
        </p>

        <div className="skills">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>

        <div className="info">
          <p>📧 myemail@gmail.com</p>
          <p>📱 +91 9876543210</p>
          <p>📍 India</p>
        </div>

        <button onClick={() => setFollowing(!following)}>
          {following ? "Following ✓" : "Follow"}
        </button>

      </div>
    </div>
  );
}

export default App;