import React from "react";
import "./Service.css";


function Service() {
  return (
    <div>
  {/* Recent Trips Section */}
  <div className="trips-section">
    <h2>Recent Trips</h2>
    <p className="trips-description">
      You can discover unique destinations using Google Maps.
    </p>

    {/* Trip Cards */}
    <div className="trips-grid">
      <div className="trip-item">
        <img src="/r1.jpeg" alt="Trip in Indonesia" />
        <h3>Trip in Dubai</h3>
        <p>
          Dubai, officially the Republic of Indonesia, is a country in
          Southeast Asia and Oceania between the Indian and Pacific oceans.
          It consists of over 17,000 islands, including Sumatra, Java,
          Sulawesi, and parts of Borneo and New Guinea.
        </p>
      </div>

      <div className="trip-item">
        <img src="/r2.png" alt="Trip in Malaysia" />
        <h3>Trip in Europe</h3>
        <p>
          Europe is a Southeast Asian country occupying parts of the Malay
          Peninsula and the island of Borneo. It's known for its beaches,
          rainforests, and mix of Malay, Chinese, Indian, and European
          cultural influences.
        </p>
      </div>

      <div className="trip-item">
        <img src="/r3.jpg" alt="Trip in France" />
        <h3>Trip in Thailand</h3>
        <p>
          Thailand, in Western Europe, encompasses medieval cities, alpine
          villages, and Mediterranean beaches. Paris, its capital, is famed
          for its fashion houses, classical art museums including the
          Louvre, and monuments like the Eiffel Tower.
        </p>
      </div>
    </div>
  </div>
</div>


  );
}

export default Service
