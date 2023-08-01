import React from "react";

function Skills() {
  return (
    <div>
      <section id="skills" className="skills section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Skills</h2>
            <p>
              Throughout my college career I have explored multiple fields by
              being an active member of the robotics club and nurtured the
              skills I gained through consistent participation in hackathons and
              competitions.{" "}
            </p>
          </div>
          <div className="row skills-content">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  C/C++<i className="val">95%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  Python<i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  JavaScript <i className="val">75%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  Java<i className="val">70%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  Arduino <i className="val">85%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  Catia <i className="val">85%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <h4 style={{ color: "var(--my-black)", fontFamily: "sans-serif" }}>
            Practice Areas
          </h4>
          {/* <hr style="border-color: var(--my-blue);"> */}
          <div
            className="row"
            style={{ color: "black", paddingTop: "2%", paddingBottom: "2%" }}
          >
            <div className="feature-box col-lg-4">
              <i className="icon fas fa-laptop fa-4x" />
              <h3 className="feature-title">Computer Vision</h3>
              <hr style={{ borderColor: "var(--my-blue)" }} />
              <p>Crowd counting System.</p>
            </div>
            <div className="feature-box col-lg-4">
              <i className="icon fas fa-microchip fa-4x" />
              <h3 className="feature-title">Automation</h3>
              <hr style={{ borderColor: "var(--my-blue)" }} />
              <p>
                Microcontroller based solutions for your next world changing
                idea.
              </p>
            </div>
            <div className="feature-box col-lg-4">
              <i className="icon fas fa-microchip fa-4x" />
              <h3 className="feature-title">Combat Robotics</h3>
              <hr style={{ borderColor: "var(--my-blue)" }} />
              <p>Prepared a combat robot.</p>
            </div>
            <div className="feature-box col-lg-4">
              <i className="icon fas fa-code fa-4x" />
              <h3 className="feature-title">Responsive Web Design</h3>
              <hr style={{ borderColor: "var(--my-blue)" }} />
              <p style={{ fontSize: "1rem" }}>
                An online store, your profile or a java based webapp. I got it
                all.
              </p>
            </div>
          </div>
          <h4 style={{ color: "var(--my-black)", fontFamily: "sans-serif" }}>
            Frameworks &amp; Softwares
          </h4>
          <br />
          <div
            className="interests container"
            style={{ paddingTop: "2%", paddingBottom: "2%" }}
          >
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "rgba(0,100,230,0.1)" }}
                >
                  <i className="ri-store-line" style={{ color: "#ffbb2c" }} />
                  <h3>OpenCV</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "rgba(0,100,230,0.1)" }}
                >
                  <i className="ri-database-2-line" />
                  <h3>NumPy</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "rgba(0,100,230,0.1)" }}
                >
                  <i
                    className="ri-calendar-todo-line"
                    style={{ color: "#e80368" }}
                  />
                  <h3>Azure</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "rgba(0,100,230,0.1)" }}
                >
                  <i className="ri-home-5-line" />
                  <h3>Catia</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "rgba(0,100,230,0.1)" }}
                >
                  <i
                    className="ri-database-2-line"
                    style={{ color: "#47aeff" }}
                  />
                  <h3>Autocad</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "rgba(0,100,230,0.1)" }}
                >
                  <i
                    className="ri-gradienter-line"
                    style={{ color: "#ffa76e" }}
                  />
                  <h3>Creo</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "rgba(0,100,230,0.1)" }}
                >
                  <i
                    className="ri-file-list-3-line"
                    style={{ color: "#11dbcf" }}
                  />
                  <h3>Matlab</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "rgba(0,100,230,0.1)" }}
                >
                  <i
                    className="ri-price-tag-2-line"
                    style={{ color: "#4233ff" }}
                  />
                  <h3>Linux</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "rgba(0,100,230,0.1)" }}
                >
                  <i className="ri-anchor-line" style={{ color: "#b2904f" }} />
                  <h3>Arduino</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "rgba(0,100,230,0.1)" }}
                >
                  <i className="ri-disc-line" style={{ color: "#b20969" }} />
                  <h3>Trace 32 Lauterbach</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "rgba(0,100,230,0.1)" }}
                >
                  <i
                    className="ri-base-station-line"
                    style={{ color: "#ff5828" }}
                  />
                  <h3>AUTOSAR</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "rgba(0,100,230,0.1)" }}
                >
                  <i
                    className="ri-fingerprint-line"
                    style={{ color: "#29cc61" }}
                  />
                  <h3>AEEE Pro</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
