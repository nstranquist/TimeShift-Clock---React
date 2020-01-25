import React from "react";

export const TS_Log = () => {
  return (
    <section className="log-container" id="log-section">
      <header className="log-toggle section-header">
        <h3 className="log-section-header">Log</h3>
      </header>
      <div id="ts-log">
        <div className="log-container">
          <div className="log-entry">
            <div className="log-header">
              <h3 className="log-title">Title</h3>
              <p className="log-date">Date</p>
            </div>
            <div className="log-body">
              <p className="log-description">A shorter log description</p>
            </div>
          </div>
          <div className="log-entry">
            <div className="log-header">
              <h3 className="log-title">Title</h3>
              <p className="log-date">Date</p>
            </div>
            <div className="log-body">
              <p className="log-description">
                This is the log body, often some sort of long description could
                go here or not, it is up to the individual logger that has the
                honor bestowed upon him or her to use this wonderfull app whose
                name is in fact TimeShift Clock, upon which using may or may not
                shift time in your favor
              </p>
            </div>
          </div>
          <div className="log-entry">
            <div className="log-header">
              <h3 className="log-title">Title</h3>
              <p className="log-date">Date</p>
            </div>
            <div className="log-body">
              <p className="log-description">A shorter log description</p>
            </div>
          </div>
          <div className="log-entry">
            <div className="log-header">
              <h3 className="log-title">Title</h3>
              <p className="log-date">Date</p>
            </div>
            <div className="log-body">
              <p className="log-description">A shorter log description</p>
            </div>
          </div>
          <div className="log-entry">
            <div className="log-header">
              <h3 className="log-title">Title</h3>
              <p className="log-date">Date</p>
            </div>
            <div className="log-body">
              <p className="log-description">A shorter log description</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
