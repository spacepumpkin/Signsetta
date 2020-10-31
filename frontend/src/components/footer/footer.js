import React from 'react';

export default function Footer() {
  return (
    <div className="ui inverted vertical footer segment">
      <div className="ui center aligned container">
        <h1 className="ui stackable inverted header">
          Our Team
        </h1>
        <div className="ui stackable inverted divided grid">
          <div className="four wide column">
            <h2 className="ui inverted header teal"></h2>
            <div className="ui link card">
              <div className="image">
                <img src="#" alt="team-member-photo" />
              </div>
              <div className="content">
                <div className="header"> Brandon Leong </div>
                <div className="meta"> Loves cats </div>
                <div className="description">
                  Brandon ...
                </div>
              </div>
              <div className="extra content">
                <span>
                  <i className="icon linkedin blue"></i>
                  LinkedIn
                </span>
                <span className="right floated">
                  <i className="icon github pink"></i>
                  Github
                </span>
              </div>
            </div>
          </div>
          <div className="four wide column">
            <h2 className="ui inverted header teal"></h2>
          </div>
        </div>
      </div>
    </div>
  )
}
