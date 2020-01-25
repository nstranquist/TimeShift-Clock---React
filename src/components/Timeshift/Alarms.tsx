import React from "react";

export const TS_Alarms = () => {
  return (
    <section className="alarms-container" id="alarms-section">
      <header className="alarms-toggle section-header">
        <h3 className="alarms-header">Alarms</h3>
      </header>
      <div id="ts-alarms">
        <div className="alarms-container">
          <div className="alarm-item">
            <div className="left-container">
              <div className="alarm-name">Alarm 1</div>
              <div className="alarm-days">M|T|W|R|F|S|S</div>
            </div>
            <div className="right-container">
              <div className="alarm-status">
                <input
                  type="checkbox"
                  className="toggle-switch"
                  id="checkbox-1"
                />
                {/* <label for="checkbox-1"></label> */}
              </div>
              {/* <div className="">Item</div>
                          <div className="">Item</div> */}
            </div>
          </div>
        </div>
        <div className="alarm-item">
          <div className="left-container">
            <div className="alarm-name">Alarm 2</div>
            <div className="alarm-days">M|T|W|R|F|S|S</div>
          </div>
          <div className="right-container">
            <div className="alarm-status">
              <input
                type="checkbox"
                className="toggle-switch"
                id="checkbox-2"
              />
              {/* <label for="checkbox-2"></label> */}
            </div>
          </div>
        </div>
        <div className="alarm-item">
          <div className="left-container">
            <div className="alarm-name">Alarm 3</div>
            <div className="alarm-days">M|T|W|R|F|S|S</div>
          </div>
          <div className="right-container">
            <div className="alarm-status">
              <input
                type="checkbox"
                className="toggle-switch"
                id="checkbox-3"
              />
              {/* <label for="checkbox-3"></label> */}
            </div>
          </div>
        </div>
        <div className="alarm-item">
          <div className="left-container">
            <div className="alarm-name">Alarm 4</div>
            <div className="alarm-days">M|T|W|R|F|S|S</div>
          </div>
          <div className="right-container">
            <div className="alarm-status">
              <input
                type="checkbox"
                className="toggle-switch"
                id="checkbox-4"
              />
              {/* <label for="checkbox-4"></label> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
