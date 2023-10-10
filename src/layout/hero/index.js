import React from "react";
import "./index.scss";
import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as Star78 } from "../../assets/star78.svg";
import { ReactComponent as Star64 } from "../../assets/star64.svg";
import { ReactComponent as Stroke } from "../../assets/stroke.svg";
import { ReactComponent as Stroke2 } from "../../assets/stroke2.svg";
import Button from "../../reuseableComponents/Button";
import { ReactComponent as Pfppic } from "../../assets/arnab_pic.svg";
import { ReactComponent as ReactIcon } from "../../assets/react.svg";
import { ReactComponent as ReduxSaga } from "../../assets/redux-saga.svg";
import { ReactComponent as Javascript } from "../../assets/javascript-1.svg";
import { ReactComponent as Git } from "../../assets/github-icon.svg";
import { ReactComponent as Computer } from "../../assets/computer.svg";
export const Hero = () => {
  return (
    <div className="hero-banner">
      <div className="ellipse" />
      <div className="star-1">
        <Star />
      </div>
      <div className="star-2">
        <Star />
      </div>
      <div className="stroke-1">
        <Stroke />
      </div>
      <div className="stroke-2">
        <Stroke2 />
      </div>
      <div className="hero">
        <div className="welcome">
          <div className="head">Hey There,</div>
          <div className="head">I'm Arnab Ranjan Das</div>
          <div className="body">
            Motivated and result-oriented Software Developer with 1+ year
            experience of full time work and 1+ year of relevant
            part-time/internship experience in Web Based Application
            Development.Worked on modern Javascript frameworks like ReactJs and
            Angular. With good understanding of best practices for writing
            readable and reusable code. A team player with good soft skills
            providing edge in team work.
          </div>
          <div className="button">
            <div>
              <Button type="neo-primary">Say Hello</Button>
            </div>
            <div>
              <Button type="neo-secondary">Explore Projects</Button>
            </div>
          </div>
        </div>
        <div className="hero-pic">
          <div className="big-star-1">
            <Star78 />
          </div>
          <div className="big-star-2">
            <Star64 />
          </div>
          <div className="pic-bg">
            <div className="info-box-one">
              <div className="icon-holder">
                <div className="icon">
                  <ReactIcon />
                </div>
                <div className="icon">
                  <ReduxSaga />
                </div>
                <div className="icon">
                  <Javascript />
                </div>
                <div className="icon">
                  <Git />
                </div>
              </div>
              <div>10+ Working </div>
              <div>skills</div>
            </div>
            <div className="info-box-two">
              <div className="number">1+</div>
              <div>
                <div>Year(s) of</div>
                <div>experience</div>
              </div>
            </div>
            <div className="info-box-three">
              <div className="icon"><Computer /></div>
              <div>Developer</div>
            </div>
            <Pfppic />
          </div>
        </div>
      </div>
    </div>
  );
};
