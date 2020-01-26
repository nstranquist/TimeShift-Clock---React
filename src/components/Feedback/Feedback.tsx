import React, {useState} from "react";
import '../../styles/components/Feedback.css'

export const Feedback = () => {
  const [feedbackData, setFeedbackData] = useState<any>({ name: '', email: '', message: '' })

  const handleChange = (e: any) => {
    setFeedbackData({
      ...feedbackData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    // send the feedback data somewhere over an API
    console.log('feedback data sent:', feedbackData)
    clearFeedbackData()
  }

  const clearFeedbackData = () => setFeedbackData({ name: '', email: '', message: '' })

  return (
    <section className="page-feedback" id="feedback-section">
      <div className="feedback-container text-center">
        <h2>Feedback</h2>
        <form className="feedback-form" onSubmit={handleSubmit}>
          <p>Name</p>
          <input type="text" name="name" placeholder="Enter Name" value={feedbackData.name} onChange={handleChange} />
          <p>Email</p>
          <input type="email" name="email" placeholder="Enter Email" value={feedbackData.email} onChange={handleChange} />
          <p>Message</p>
          <textarea name="message" placeholder="Type Here" value={feedbackData.message} onChange={handleChange}></textarea>
          <input
            className="submit-btn"
            type="submit"
            // name="submit"
            value="Send"
          />
        </form>
      </div>
    </section>
  );
};
