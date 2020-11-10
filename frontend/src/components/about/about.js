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
                <img src="#" alt="team-member" />
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
                <img src="#" alt="team-member" />
              </div>
              <div className="content">
                <div className="ui header teal"> Malcolm Reyes</div>
                <div className="meta">Loves cats more than gary</div>
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQF1WMhFKFhFNQ/profile-displayphoto-shrink_400_400/0?e=1610582400&v=beta&t=hUAAaE4llHT9F4TqcCF5OBtSunAzs81Ja0PWdeY7hBM"></img>
                <div className="description">
                  A Software Engineer: enthusiastic about Designing intuitive user interfaces,
                  and learning as much as possible.
                </div>
              </div>
              <div className="extra content">
                <a className="left floated" href="https://www.linkedin.com/in/malcolm-r-333b21126/">
                  <i className="icon linkedin blue"></i>
                  LinkedIn
                </a>
                <a className="right floated" href="https://github.com/xalcolm1">
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
