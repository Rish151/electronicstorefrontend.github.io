import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="Contact">
        <div className="container gx-0">
          <div className="row gx-0 align-items-center">
            <div className="col-md-6">
              <div className="Contact_address">
                <h2 className="mb-4">Address</h2>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56159.477914604315!2d77.26707738107682!3d28.390053504134528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd894038ee65%3A0x23d5c9fd0a2e99d5!2sOmaxe%20World%20Street%20Faridabad!5e0!3m2!1sen!2sin!4v1721291966954!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-md-6">
              <div className="Contact_form">
                <h2 className="mb-4">Contact Us</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="email" className="labell">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject" className="labell">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="labell" >Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
