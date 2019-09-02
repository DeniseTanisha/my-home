import React, { Component } from "react";
import NavBar from "../../NavBar";
import { Link } from "@reach/router";
import styles from "./myStory.module.scss";
import elephant from "../../assets/elephant.png";

class myStory extends Component {
  state = {};
  render() {
    return (
      <div className={styles.myStory}>
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
            <p> MY STORY</p>
          </section>
        </div>

        <div className={styles.bottompage}>
          <p className="workinprogress">
            Thank you for the interest but I am still working here. Check it out
            soon though!
          </p>
        </div>
      </div>
    );
  }
}

export default myStory;
