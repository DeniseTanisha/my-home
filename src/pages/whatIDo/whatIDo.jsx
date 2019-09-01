import React, { Component } from "react";
import { Link } from "@reach/router";
import NavBar from "../../NavBar";
import styles from "./whatIDo.module.scss";
import hedira from "../../assets/hedira.png";

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

        <div className={styles.bottompage}>
          <article>{/* <img src={hedira} /> */}</article>
          {/* <card className={styles.web}>Web developer</card> */}
        </div>
      </div>
    );
  }
}

export default whatIDo;
