import React from "react";

// Add CSS styles for better layout
const styles = `
  #features {
    padding: 60px 0;
    background-color: #f5f5f5;
  }

  .section-title {
    text-align: center;
    margin-bottom: 40px;
  }

  .section-title h2 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
  }

  .features-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }

  .feature-card {
    background: white;
    border-radius: 12px;
    padding: 20px;
    max-width: 280px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    text-align: center;
  }

  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .feature-icon {
    font-size: 48px;
    color: #ff6b6b;
    margin-bottom: 15px;
  }

  .feature-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
  }

  .feature-text {
    font-size: 16px;
    color: #666;
    line-height: 1.5;
  }

  @media screen and (max-width: 768px) {
    .features-container {
      flex-direction: column;
      align-items: center;
    }

    .feature-card {
      width: 90%;
      max-width: 350px;
    }
  }
`;

// Add styles to the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// Features Component
export const Features = () => {
  // Features data
  const featuresData = [
    {
      title: "Vehicle Fire Alerts",
      icon: "fa fa-bell",
      text: "Provides real-time notifications of vehicle fires, enabling immediate response to potential hazards.",
    },
    {
      title: "Fire Detection System",
      icon: "fa fa-fire",
      text: "Uses advanced sensors and algorithms to accurately detect fires within vehicles.",
    },
    {
      title: "Fire Severity Analysis",
      icon: "fa fa-chart-bar",
      text: "Analyzes the detected fire's severity level to determine the necessary response, helping prioritize resources.",
    },
    {
      title: "Optimal Route to Fire Location",
      icon: "fa fa-road",
      text: "Calculates the quickest and safest route to the fire location, ensuring faster response times for the fire brigade.",
    },
    {
      title: "Automatic Fire Extinguisher Service",
      icon: "fa fa-fire-extinguisher",
      text: "Automatically deploys fire extinguishers to control vehicle fires efficiently before they spread further.",
    },
  ];

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>SERVICES</h2>
        </div>
        <div className="features-container">
          {featuresData.map((feature, index) => (
            <div key={index} className="feature-card">
              <i className={`feature-icon ${feature.icon}`}></i>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-text">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
