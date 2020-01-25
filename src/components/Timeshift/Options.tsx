import React, {useState} from "react";

export const TS_Options = () => {
  const [open, setOpen] = useState<boolean>(true)

  const toggleHeaderOpen = () => {
    setOpen(!open)
  }
  
  return (
    <section className="timeshift-options" id="options-section">
      <header className="options-toggle section-header"
        onClick={toggleHeaderOpen}>
        <h3 className="timeshift-header">TimeShift</h3>
      </header>
      {open && (
        <div id="ts-options">
          <div className="timeshift-container">
            <ul className="ts-list">
              <li className="ts-row">
                <h4 className="ts-left">Option 1:</h4>
                <div className="ts-right">
                  <input type="radio" value="yes" /> Yes
                  <input type="radio" value="no" /> No
                </div>
              </li>
              <li className="ts-row">
                <h4 className="ts-left">Option 2:</h4>
                <div className="ts-right">
                  <input type="radio" value="red" /> Red
                  <input type="radio" value="blue" /> Blue
                  <input type="radio" value="green" /> Green
                  <input type="radio" value="yellow" /> Yellow
                  <p>
                    second row instructions / options here. Time!{" "}
                    <input type="time" />
                  </p>
                </div>
              </li>
              <li className="ts-row">
                <h4 className="ts-left">Option 3:</h4>
                <div className="ts-right">
                  <p>Pick a Date</p>
                  <input type="date" />
                </div>
              </li>
              <li className="ts-row">
                <h4 className="ts-left">Option 4:</h4>
                <div className="ts-right">
                  <p>
                    second row options here, or instead just try adding an entire
                    paragraph. I mean, it's not like anyone cares. In fact, they
                    probably care a lot because a long-winded paragraph would
                    hopefully be placed there for good reaon.
                  </p>
                  <p>Was that useful?</p>
                  <input type="radio" value="yes" /> Yes
                  <input type="radio" value="no" /> No
                </div>
              </li>
              <li className="ts-row">
                <h4 className="ts-left">Option 5:</h4>
                <div className="ts-right">
                  <p>Here, you can do some cool stuff, like...</p>
                  <ul>
                    <li>
                      <input type="checkbox" /> add a list
                    </li>
                    <li>
                      <input type="checkbox" /> of items
                    </li>
                    <li>
                      <input type="checkbox" /> that would help
                    </li>
                    <li>
                      <input type="checkbox" /> the user
                    </li>
                  </ul>
                </div>
              </li>
              <li className="ts-row save">
                <div className="save-wrapper">
                  <h3>Save</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};
