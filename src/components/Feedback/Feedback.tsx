import React from "react";
import '../../styles/components/Feedback.css'

export const Feedback = () => {
  return (
    <section className="page-feedback" id="feedback-section">
      <div className="feedback-container text-center">
        <h2>Feedback</h2>
        <form className="feedback-form">
          <p>Name</p>
          <input type="text" name="Name" placeholder="Enter Name" />
          <p>Email</p>
          <input type="text" name="Email" placeholder="Enter Email" />
          <p>Message</p>
          <textarea name="message" placeholder="Type Here"></textarea>
          <input
            className="submit-btn"
            type="submit"
            name="submit"
            value="Send"
          />
        </form>
      </div>
    </section>
  );
};
