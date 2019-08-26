import React, { Component } from "react";
import styles from "./getInTouch.module.scss";
import NavBar from "../../NavBar";
import { Link } from "@reach/router";

class getInTouch extends Component {
  state = {};
  render() {
    return (
      <div className={styles.getInTouch}>
        <NavBar />
        <div className={styles.toppage}>
          <section className={styles.developer}>
            <p> GET IN TOUCH</p>
          </section>
        </div>

        <div className={styles.bottompage}></div>
      </div>
    );
  }
}

export default getInTouch;
