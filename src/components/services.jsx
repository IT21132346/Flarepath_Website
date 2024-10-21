import React from "react";

export const Services = (props) => {
  // Common description for all services
  const commonDescription = (
    <strong>

    </strong>
  );

  // Services data
  const servicesData = [
    {
      name: <strong>Topic Evaluation</strong>,
      // icon: "fa fa-bell",
      text: "Presented to a panel of judged in order to provide an overview of the proposed research ",
    },

    {
      name: <strong>Project Proposal</strong>,
      // icon: "fa fa-bell",
      text: "Presented to a panel of judged in order to provide an overview of the proposed research ",
    },
    {
      name: <strong>Progress Presentation - 1</strong>,
      // icon: "fa fa-fire",
      text: "Evaluation of 50% completion of the proposed solution by a panel of judges",
    },
    {
      name: <strong>Progress Presentation - 2</strong>,
      // icon: "fa fa-tachometer-alt",
      text: "Evaluation of 90% completion of the proposed solution by a panel of judges",
    },
    {
      name: <strong>Final Assesment & Viva</strong>,
      // icon: "fa fa-road",
      text: "Final evaluation of the completed product",
    },
  
   
  ];

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Milestones</h2>
          <p>{commonDescription}</p>
        </div>
        <div className="row">
          {servicesData.map((service, index) => (
            <div key={`${service.name}-${index}`} className="col-md-4">
              <i className={service.icon}></i>
              <div className="service-desc">
                <h3>{service.name}</h3>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
