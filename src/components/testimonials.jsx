import React from "react";

export const Testimonials = (props) => {
  // Testimonials data
  const testimonialsData = [
    {
      name: "Navod Perera",
      img: "img/team/john-smith-image.jpg", // Replace with actual image path
      text: "The vehicle fire alert system has been a game-changer for our fire brigade. The prompt alerts allow us to respond quickly, minimizing damage and saving lives.",
    },
    {
      name: "Nuwan Fernando",
      // img: "path/to/emma-johnson-image.jpg", // Replace with actual image path
      text: "The fire detection and severity analysis features are highly accurate, providing essential information to prioritize our response efforts.",
    },
    {
      name: "Dilshani Gunawardana",
      // img: "path/to/michael-brown-image.jpg", // Replace with actual image path
      text: "Calculating the optimal route to the fire location has significantly improved our response time. It’s a highly reliable feature.",
    },
    {
      name: "Nelunka Perera",
      // img: "path/to/sophia-taylor-image.jpg", // Replace with actual image path
      text: "The automatic fire extinguisher service is efficient and ensures that vehicle fires are controlled effectively before they spread further.",
    },
    {
      name: "Sachin abeynayaka",
      // img: "path/to/david-clark-image.jpg", // Replace with actual image path
      text: "The safety recommendations provided by the system help us maintain compliance with safety protocols and ensure a safer environment for everyone.",
    },
  ];

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What Our Clients Say</h2>
        </div>
        <div className="row">
          {testimonialsData.map((d, i) => (
            <div key={`${d.name}-${i}`} className="col-md-4">
              <div className="testimonial">
                <div className="testimonial-image">
                  <img src={d.img} alt={d.name} />
                </div>
                <div className="testimonial-content">
                  <p>"{d.text}"</p>
                  <div className="testimonial-meta">- {d.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
