import React, { useState } from "react";
import { connect } from 'react-redux'
import { RootState } from "../../store/rootReducer";

interface ClockProps {
  active: boolean,
  numbersActive: number[]
}

const defaultOptions = {
  isActive: false, // make true later
  numbersActive: [],
}

export const TS_OptionsUI: React.FC<ClockProps> = ({
  active,
  numbersActive,
}) => {
  const [open, setOpen] = useState<boolean>(true)
  const [options, setOptions] = useState<any>(defaultOptions)

  const toggleHeaderOpen = () => {
    setOpen(!open)
  }

  const handleChange = (e: any) => {
    switch(e.target.name) {
      case 'isActive':
        setOptions({
          ...options,
          isActive: e.target.value === 'yes' ? true : false
        })
        return;
      case 'numbersActive':
        let newNumbers = [...options.numbersActive]
        if(e.target.checked) {
          newNumbers.push(e.target.value)
        }
        else {

        }
        setOptions({
          ...options,
          numbersActive: numbersActive
        })
        return;
        default:
        setOptions({
          ...options,
          [e.target.name]: e.target.value
        })
    }
    console.log('new form data:', options)
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
              {/* TimeShift Active */}
              <li className="ts-row">
                <h4 className="ts-left">TimeShift?:</h4>
                <div className="ts-right">
                  <input type="radio" name="isActive" value="yes" onChange={handleChange} /> Yes
                  <input type="radio" name="isActive" value="no" onChange={handleChange} /> No
                </div>
              </li>

              {/* Active Numbers */}
              <li className="ts-row">
                <h4 className="ts-left">Numbers Active:</h4>
                <div className="ts-right">
                  <input type="checkbox" value={1} name="numbersActive" onChange={handleChange} /> 1's
                  <input type="checkbox" value={2} name="numbersActive" onChange={handleChange} /> 2's
                  <input type="checkbox" value={3} name="numbersActive" onChange={handleChange} /> 3's
                  <input type="checkbox" value={4} name="numbersActive" onChange={handleChange} /> 4's
                  <input type="checkbox" value={5} name="numbersActive" onChange={handleChange} /> 5's
                  <input type="checkbox" value={6} name="numbersActive" onChange={handleChange} /> 6's
                  <input type="checkbox" value={7} name="numbersActive" onChange={handleChange} /> 7's
                  <input type="checkbox" value={8} name="numbersActive" onChange={handleChange} /> 8's
                  <input type="checkbox" value={9} name="numbersActive" onChange={handleChange} /> 9's
                  <input type="checkbox" value={0} name="numbersActive" onChange={handleChange} /> 0's
                  <p>
                    second row instructions / options here. Time!{" "}
                    <input type="time" />
                  </p>
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

const mapStateToProps = (state: RootState) => ({
  active: state.timeshift.active,
  numbersActive: state.timeshift.numbersActive
})

export const TS_Options = connect(
  mapStateToProps,
  {  }
)(TS_OptionsUI)