import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          {/* Image Section */}
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="About Us" />
          </div>

          {/* Text Section */}
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p className="text-justify">
                We are a pioneering team dedicated to enhancing fire safety and emergency response through advanced technologies. Our innovative solutions are designed specifically for fire brigades, enabling them to receive real-time alerts on vehicle fires. Our system integrates fire detection, severity assessment, and optimal routing to ensure rapid response. Additionally, we offer automated fire extinguisher services tailored to vehicle fire incidents, providing a comprehensive approach to safety.
              </p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Real-time Alerts for faster response</li>
                    <li>Advanced Fire Detection technology</li>
                    <li>Accurate Severity Assessment for better decision-making</li>
                    <li>Optimal Routing for quickest access</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Automated Fire Extinguisher Deployment</li>
                    <li>Scalable Solutions for various scenarios</li>
                    <li>Proven Safety Enhancements</li>
                    <li>Comprehensive Support & Training</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
