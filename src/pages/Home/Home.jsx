import React, { Component } from "react";
import styles from "./Home.module.scss";
import NavBar from "../../NavBar";
import elephant from "../../assets/elephant.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className={styles.home}>
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
            <p>WEB DEVELOPER</p>
          </section>
        </div>

        <div className={styles.bottompage}>
          <section className={styles.words}>
            <p className={styles.whatido}>WHAT I DO</p>
            <p className={styles.mystory}>MY STORY</p>
            <p className={styles.getintouch}>GET IN TOUCH</p>
          </section>
          <section className={styles.shadows}>
            <div className={styles.what} />
            <div className={styles.story} />
            <div className={styles.touch} />
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
