import React from "react";

export const Header = (props) => {
  // Home data
  const homeData = {
    title: "FLAREPATH",
    paragraph:
      "Embodies the pinnacle of innovation in vehicle safety, transforming advanced monitoring technology into life-saving solutions. With our cutting-edge approach, we not only detect potential hazards but also ensure swift emergency dispatch, setting new standards in vehicle fire safety and response effectiveness.",
  };

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {homeData.title}
                  <span></span>
                </h1>
                <p>{homeData.paragraph}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
