import React from "react";

// Define styles for the team section
const styles = `
  .text-center {
    text-align: center;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .section-title h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  .section-title p {
    font-size: 16px;
    margin-bottom: 40px;
    color: #555;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .team {
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
  }

  .thumbnail {
    padding: 0;
    border: none;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    width: 220px; /* Set a fixed width for consistency */
  }

  .thumbnail:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }

  .team-img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .caption {
    padding: 15px;
    background-color: #f9f9f9;
    text-align: center;
  }

  .caption h4 {
    margin: 10px 0 5px;
    font-size: 18px;
    font-weight: bold;
  }

  .caption p {
    font-size: 14px;
    color: #777;
    margin: 0;
  }
`;

// Add styles to the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// Team Component
export const Team = () => {
  // Team data
  const teamData = [
    {
      name: "Pasindu Dharmagunwardhana",
      img: "/img/team/Picture4.png",
      job: "IT21132346",
    },
    {
      name: "Glen Anthick",
      img: "/img/team/Picture5.png",
      job: "IT21096266",
    },
    {
      name: "Dewmini Abeywardhana",
      img: "/img/team/Picture6.png",
      job: "IT21133718",
    },
    {
      name: "Peramunage A N",
      img: "/img/team/Picture7.png",
      job: "IT21080562",
    },
    {
      name: "Nelum Chathuranga Amarasena",
      img: "/img/team/Picture1.jpg",
      job: "Supervisor",
    },
    {
      name: "Deemantha Nayanajith Siriwardana",
      img: "/img/team/Picture2.jpg",
      job: "Co-Supervisor",
    },
    {
      name: "W D Onray Sahinda",
      img: "/img/team/Picture3.jpg",
      job: "External-Supervisor",
    },
  ];

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Meet the Team</h2>
          <p>
            Our dedicated team works tirelessly to develop cutting-edge
            solutions for vehicle fire detection, severity assessment, optimal
            routing, and fire extinguisher deployment, ensuring safety and rapid
            response.
          </p>
        </div>
        <div className="row">
          {teamData.map((d, i) => (
            <div key={i} className="team">
              <div className="thumbnail">
                <img src={d.img} alt={d.name} className="team-img" />
                <div className="caption">
                  <h4>{d.name}</h4>
                  <p>{d.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
