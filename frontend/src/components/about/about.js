import React from 'react';

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
                <img src="#" alt="team-member" />
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
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQEtbHNVEWimVQ/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=-UhnM20qoyoSLBxI7NfwXUIS0fuMTanbwOd1ouStpgA" alt="team-member" />
              </div>
              <div className="content">
                <div className="ui header teal"> Bella Sandoval </div>
                <div className="meta"> Loves cats more than Malcom.</div>
                <div className="description">
                  Bella is a software engineer that enjoys full stack development and exploring new ways to solving problems.
                </div>
              </div>
              <div className="extra content">
                <a className="left floated" href="#">
                  <i className="icon linkedin blue"></i>
                  <a href="https://www.linkedin.com/in/isabella-sandoval-513025192/">LinkedIn</a>
                </a>
                <a className="right floated" href="#">
                  <i className="icon github pink"></i>
                  <a href="https://github.com/isabella-sandoval">Github</a>
                </a>
              </div>
            </div>
          </div>
          <div className="four wide column">
            <div className="ui link card teal inverted">
              <div className="image">
                <img src="#" alt="team-member" />
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
                <img src="#" alt="team-member" />
              </div>
              <div className="content">
                <div className="ui header teal"> Gary Wan </div>
                <div className="meta"> Loves cats </div>
                <div className="description">
                  Gary ...
                </div>
              </div>
              <div className="extra content">
                <a className="left floated" href="#">
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
