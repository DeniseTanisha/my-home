import React, { Component } from "react";
import { Link } from "@reach/router";
import NavBar from "../../NavBar";
import styles from "./whatIDo.module.scss";
import hedira from "../../assets/hedira.png";
import elephant from "../../assets/elephant.png";
import tugofwar from "../../assets/tugofwar.png";

class whatIDo extends Component {
  state = {};
  render() {
    return (
      <article className={styles.whatIDo}>
        <NavBar />
        <section className={styles.toppage}>
          <div className={styles.logo}>
            <span>
              <img src={elephant} className={styles.ele} alt="" />{" "}
            </span>
            <span>
              {" "}
              <h1 className={styles.title}>Denise Stubbs</h1>{" "}
            </span>
          </div>
          <heading className={styles.heading}>
            <p> WHAT I DO</p>
          </heading>
        </section>

        <div className={styles.bottompage}>
          <section className={styles.portfolio}>
            <article className={styles.projectbox}>
              <img className={styles.projectsnip} src={hedira} alt="" />
              <p className={styles.description}>
                <ul className={styles.description}>
                  <li>Group Project</li>
                  <li> React App </li>
                  <li> SCSS</li>
                  <li> HTML5</li>
                  <li>Authentication</li>
                  <li>Friebase storage</li>
                  <li>
                    <a href="https://app.hedira.io/welcome">Check It out</a>
                  </li>
                </ul>
              </p>
            </article>

            <article className={styles.projectboxtugofwar}>
              <img className={styles.projectsnip} src={tugofwar} alt="" />
              <p className={styles.description}>
                <ul className={styles.description}>
                  <li>Personal Project</li>
                  <li>Single Page Project</li>
                  <li> HTML5</li>
                  <li> JavaScript</li>
                  <li> CSS </li>
                  <li>
                    <a
                      href="https://app.hedira.io/welcome"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {"Check It out"}
                    </a>{" "}
                  </li>
                  <li>
                    <a
                      href="https://github.com/DeniseTanisha/tug-of-war"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {"Check out the code"}
                    </a>{" "}
                  </li>
                </ul>
              </p>
            </article>
          </section>
        </div>
      </article>
    );
  }
}

export default whatIDo;
