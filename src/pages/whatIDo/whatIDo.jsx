import React, { Component } from "react";
import { Link } from "@reach/router";
import NavBar from "../../NavBar";
import styles from "./whatIDo.module.scss";
import hedira from "../../assets/hedira.png";
import elephant from "../../assets/elephant.png";

class whatIDo extends Component {
  state = {};
  render() {
    return (
      <div className={styles.whatIDo}>
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
            <p> WHAT I DO</p>
          </section>
        </div>

        <div className={styles.bottompage}>
          <article>
            <img src={hedira} />
          </article>
          {/* <card className={styles.web}>Web developer</card> */}
        </div>
      </div>
    );
  }
}

export default whatIDo;
