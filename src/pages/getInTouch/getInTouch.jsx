import React, { Component } from "react";
import styles from "./getInTouch.module.scss";
import NavBar from "../../NavBar";
import { Link } from "@reach/router";
import elephant from "../../assets/elephant.png";

class getInTouch extends Component {
  state = {};
  render() {
    return (
      <div className={styles.getInTouch}>
        <NavBar />
        <div className={styles.toppage}>
          <div className={styles.logo}>
            <span>
              <img src={elephant} className={styles.ele} alt="" />{" "}
            </span>
            <span>
              {" "}
              <h1 className={styles.title}>Denise Stubbs</h1>{" "}
            </span>
          </div>
          <section className={styles.developer}>
            <p> GET IN TOUCH</p>
          </section>
        </div>
        <div className={styles.bottompage}>
          <section className={styles.contact}>
            <div className={styles.contactdetails}>
              <i class="fa fa-envelope" aria-hidden="true">
                {" "}
                denise_stubbs@hotmail.co.uk
              </i>
            </div>
            <div className={styles.contactdetails}>
              <i class="fa fa-mobile" aria-hidden="true">
                {" "}
                076 76464 614{" "}
              </i>
            </div>
            <div className={styles.contactdetails}>
              <i class="fa fa-linkedin" aria-hidden="true"></i>{" "}
              <a href="linkedin.com/in/denisetanishastubbs" target="_blank">
                {" "}
                My Linkedin{" "}
              </a>
            </div>
            <div className={styles.contactdetails}>
              <i class="fa fa-github" aria-hidden="true"></i>{" "}
              <a
                href="https://github.com/DeniseTanisha"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Github
              </a>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default getInTouch;
