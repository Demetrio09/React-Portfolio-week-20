import React from "react";
import "./style.css";

const Project = () => {
  return (
    <div>
      <main className="container">
        <div className="row">
          <div className="col-sm-2">
            <p></p>
          </div>
          <div className="col-sm-8">
            <div style={{ top: "220px" }} className="position-relative">
              <h1 style={{ color: "lightgray" }} className="display-4">
                Demetrio Almeida
              </h1>
              <p style={{ color: "gray" }} className="lead">
                Front-End Developer
              </p>
            </div>
          </div>
          <div className="col-sm-2">
            <p></p>
          </div>
        </div>
      </main>
      <footer style={{ textAlign: "center" }} className="fixed-bottom">
        <div className="card-body">
          <p className="card-text">
            <small className="text-muted">&copy;DABJ M SOLUTIONS LLC</small>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Project;
