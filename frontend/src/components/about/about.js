import React from 'react';
import profileGary from "../../images/profilepic-gary.png";

export default function About() {
  return (
    <div className="ui vertical footer">
      <div className="ui center aligned container inverted">
        <h1 className="ui stackable header pink">
          Our Team
        </h1>
        <div className="ui divider grey"></div>
        <br />
        <div className="ui stackable relaxed grid">
          <div className="four wide column">
            <div className="ui link card teal inverted">
              <div className="image">
                <img src="#" alt="profile pic" />
              </div>
              <div className="content">
                <div className="ui header teal"> Brandon Leong </div>
                <div className="meta"> Loves cats </div>
                <div className="description">
                  Brandon ...
                </div>
              </div>
              <div className="extra content">
                <a className="left floated" href="#">
                  <i className="icon linkedin blue"></i>
                  LinkedIn
                </a>
                <a className="right floated" href="#">
                  <i className="icon github pink"></i>
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="four wide column">
            <div className="ui link card teal inverted">
              <div className="image">
                <img src="#" alt="profile pic" />
              </div>
              <div className="content">
                <div className="ui header teal"> Bella Sandoval </div>
                <div className="meta"> Loves cats </div>
                <div className="description">
                  Bella ...
                </div>
              </div>
              <div className="extra content">
                <a className="left floated" href="#">
                  <i className="icon linkedin blue"></i>
                  LinkedIn
                </a>
                <a className="right floated" href="#">
                  <i className="icon github pink"></i>
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="four wide column">
            <div className="ui link card teal inverted">
              <div className="image">
                <img src="#" alt="profile pic" />
              </div>
              <div className="content">
                <div className="ui header teal"> Malcolm Reyes </div>
                <div className="meta"> Loves cats </div>
                <div className="description">
                  Malcolm ...
                </div>
              </div>
              <div className="extra content">
                <a className="left floated" href="#">
                  <i className="icon linkedin blue"></i>
                  LinkedIn
                </a>
                <a className="right floated" href="#">
                  <i className="icon github pink"></i>
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="four wide column">
            <div className="ui link card teal inverted">
              <div className="image">
                <img src={profileGary} alt="profile pic" />
              </div>
              <div className="content">
                <div className="ui header teal"> Gary Wan </div>
                <div className="meta"> Loves cats more than Brandon </div>
                <div className="description">
                  Gary is a medical/healthcare worker turned full-stack software engineer with a focus on design and user engagement
                </div>
              </div>
              <div className="extra content">
                <a className="left floated" href="https://www.linkedin.com/in/gary-w-269749ba/">
                  <i className="icon linkedin blue"></i>
                  LinkedIn
                </a>
                <a className="right floated" href="https://github.com/spacepumpkin">
                  <i className="icon github pink"></i>
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
