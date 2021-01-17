import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const NavBar = (props) => {
  return (
    <nav className="heavy-rain-gradient navbar navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">
          <img
            alt=""
            src="https://raw.githubusercontent.com/abhisheksaxena1998/reactToDoApplication/main/src/og-image.png"
            height="60"
            loading="lazy"
          />
          <strong>
            {"  "}
            Movie Ticketing System{" "}
          </strong>
          <div className="spinner-grow text-secondary" role="status"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
