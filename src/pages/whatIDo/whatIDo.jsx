import React, { Component } from "react";
import { Link } from "@reach/router";
import NavBar from "../../NavBar";
import styles from "./whatIDo.module.scss";

class whatIDo extends Component {
  state = {};
  render() {
    return (
      <div className={styles.whatIDo}>
        <NavBar />
        <div className={styles.toppage}>
          <section className={styles.developer}>
            <p> WHAT I DO</p>
          </section>
        </div>

        <div className={styles.bottompage}></div>
      </div>
    );
  }
}

export default whatIDo;
