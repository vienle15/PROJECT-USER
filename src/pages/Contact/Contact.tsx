import React from "react";

function Contact() {
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Say Something</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-lg-6">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3>Contact us</h3>
                      <p className="mb-4">
                        We're open for any suggestion or just to have a chat
                      </p>
                      <div id="form-message-warning" className="mb-4" />
                      <div id="form-message-success" className="mb-4">
                        Your message will be sent, thank you!
                      </div>
                      <div className="row mb-4">
                        <div className="col-md-4">
                          <div className="dbox w-100 d-flex align-items-start">
                            <div className="text">
                              <p>
                                <span>Address:</span> 198 West 21th Street,
                                Suite 721 New York NY 10016
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="dbox w-100 d-flex align-items-start">
                            <div className="text">
                              <p>
                                <span>Email:</span>{" "}
                                <a href="mailto:info@yoursite.com">
                                  info@yoursite.com
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="dbox w-100 d-flex align-items-start">
                            <div className="text">
                              <p>
                                <span>Phone:</span>{" "}
                                <a href="tel://1234567920">+ 1235 2355 98</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <form
                        method="POST"
                        id="contactForm"
                        name="contactForm"
                        className="contactForm"
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols={30}
                                rows={4}
                                placeholder="Create a message here"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="submit"
                                defaultValue="Send Message"
                                className="btn btn-third"
                              />
                              <div className="submitting" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-stretch">
                    <div
                      className="info-wrap w-100 p-5 img"
                      style={{
                        backgroundImage:
                          "url(https://wallpapers.com/images/featured/cartoon-shoe-0aofc0y4qf7nsesq.jpg)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
