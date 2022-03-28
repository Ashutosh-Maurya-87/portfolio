import React from "react";

const HOME = () => {
  return (
    <>
      <div className="caption-header text-center wow zoomInDown">
        <h5 className="fw-normal">Welcome</h5>
        <h1 className="fw-light mb-4">
          I'm <b className="fg-theme">Vinay</b> Maurya
        </h1>
        <div className="badge">Web Designer & Frontend Developer</div>
      </div>
      <div className="vg-page page-about" id="about">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4 py-3">
              <div className="img-place wow fadeInUp">
                <img src="../assets/img/person.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 wow fadeInRight">
              <h1 className="fw-light">Vinay Maurya</h1>
              <h5 className="fg-theme mb-3">
                Web Designer & Frontend Developer
              </h5>
              <p className="text-muted">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form but the
                majority have suffered alteration in some
              </p>
              <ul className="theme-list">
                <li>
                  <b>From:</b> Ludhiana, Punjab
                </li>
                <li>
                  <b>Lives In:</b> Ludhiana, Punjab
                </li>
                <li>
                  <b>Age:</b> 28
                </li>
                <li>
                  <b>Gender:</b> Male
                </li>
              </ul>
              <button className="btn btn-theme-outline">Download CV</button>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <h1 className="text-center fw-normal wow fadeIn">My Skills</h1>
          <div className="row py-3">
            <div className="col-md-6">
              <div className="px-lg-3">
                <h4 className="wow fadeInUp">Coding skills</h4>
                <div className="progress-wrapper wow fadeInUp">
                  <span className="caption">JavaScript</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "86%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      86%
                    </div>
                  </div>
                </div>
                <div className="progress-wrapper wow fadeInUp">
                  <span className="caption">React Js</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      80%
                    </div>
                  </div>
                </div>
                <div className="progress-wrapper wow fadeInUp">
                  <span className="caption">HTML + CSS</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      100%
                    </div>
                  </div>
                </div>
                <div className="progress-wrapper wow fadeInUp">
                  <span className="caption">Mongo DB</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      90%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="px-lg-3">
                <h4 className="wow fadeInUp">Design Skills</h4>
                <div className="progress-wrapper wow fadeInUp">
                  <span className="caption">UI / UX Design</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "92%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      92%
                    </div>
                  </div>
                </div>
                <div className="progress-wrapper wow fadeInUp">
                  <span className="caption">Web Design</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "99%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      99%
                    </div>
                  </div>
                </div>
                <div className="progress-wrapper wow fadeInUp">
                  <span className="caption">Logo Design</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "79%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      79%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-6 wow fadeInRight">
              <h2 className="fw-normal">Education</h2>
              <ul className="timeline mt-4 pr-md-5">
                <li>
                  <div className="title">2010</div>
                  <div className="details">
                    <h5>Specialize of course</h5>
                    <small className="fg-theme">University of Punjab</small>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered
                    </p>
                  </div>
                </li>
                <li>
                  <div className="title">2009</div>
                  <div className="details">
                    <h5>Specialize of course</h5>
                    <small className="fg-theme">University of Punjab</small>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered
                    </p>
                  </div>
                </li>
                <li>
                  <div className="title">2008</div>
                  <div className="details">
                    <h5>Specialize of course</h5>
                    <small className="fg-theme">University of Punjab</small>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 wow fadeInRight" data-wow-delay="200ms">
              <h2 className="fw-normal">Experience</h2>
              <ul className="timeline mt-4 pr-md-5">
                <li>
                  <div className="title">2017 - Current</div>
                  <div className="details">
                    <h5>Specialize of course</h5>
                    <small className="fg-theme">University of Punjab</small>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered
                    </p>
                  </div>
                </li>
                <li>
                  <div className="title">2014</div>
                  <div className="details">
                    <h5>Specialize of course</h5>
                    <small className="fg-theme">University of Punjab</small>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered
                    </p>
                  </div>
                </li>
                <li>
                  <div className="title">2011</div>
                  <div className="details">
                    <h5>Specialize of course</h5>
                    <small className="fg-theme">University of Punjab</small>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOME;
