import React, { Component } from "react";
import { menuItems } from "./menuItems";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-dark static-top" id="home">
          <div class="container">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" style={{ cursor: "pointer" }}
                      onClick={() => {
                        const anchor = document.querySelector("#home");
                        anchor.scrollIntoView({
                          behavior: "smooth",
                          block: "start"
                        });
                      }}>
                  
                      Home
                 
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link"   style={{ cursor: "pointer" }}
                      onClick={() => {
                        const anchor = document.querySelector("#my-work");
                        anchor.scrollIntoView({
                          behavior: "smooth",
                          block: "start"
                        });
                      }}>
                    My Work
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" style={{ cursor: "pointer" }}
                      onClick={() => {
                        const anchor = document.querySelector("#");
                        anchor.scrollIntoView({
                          behavior: "smooth",
                          block: "start"
                        });
                      }}>
                
                    Contact
                 
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about-me">
                    About Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
