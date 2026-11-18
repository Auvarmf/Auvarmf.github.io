import React from "react";

export default function FooterOne() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-top">
              <p>Have a project or research idea?</p>
              <h2>
                <a href="mailto:auvarmf@gmail.com">let’s work</a>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <p className="copy-left-text">
              © {new Date().getFullYear()} Auvar Mahsa Fahlevi. All rights
              reserved.
            </p>
          </div>
          <div className="col-lg-6 col-sm-6">
            <p className="copy-right-text">Metro, Lampung, Indonesia</p>
          </div>
        </div>
      </div>
    </footer>
  );
}