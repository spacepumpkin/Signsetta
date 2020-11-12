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
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQE_pPYBSkbvsg/profile-displayphoto-shrink_400_400/0?e=1610582400&v=beta&t=B7nVMKwNe4nfQDVQwrb8EY2UKMyNvQ6yn4Lw-lZNOK8" alt="profile pic" />
              </div>
              <div className="content">
                <div className="ui header teal"> Brandon Leong </div>
                <div className="meta"> Loves cats more than Bella </div>
                <div className="description">
                  A software engineer dedicated to self-improvement and crafting positive user experiences.
                </div>
              </div>
              <div className="extra content">
                <a className="left floated" href="https://www.linkedin.com/in/brandon-leong-8bb965138/">
                  <i className="icon linkedin blue"></i>
                  LinkedIn
                </a>
                <a className="right floated" href="https://github.com/bleong7818">
                  <i className="icon github pink"></i>
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="four wide column">
            <div className="ui link card teal inverted">
              <div className="image">
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQEtbHNVEWimVQ/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=-UhnM20qoyoSLBxI7NfwXUIS0fuMTanbwOd1ouStpgA" alt="profile pic" />
              </div>
              <div className="content">
                <div className="ui header teal"> Bella Sandoval </div>
                <div className="meta"> Loves cats more than Malcolm</div>
                <div className="description">
                  Bella is a software engineer that enjoys full stack development and exploring new ways to solving problems.
                </div>
              </div>
              <div className="extra content">
                <a className="left floated" href="https://www.linkedin.com/in/isabella-sandoval-513025192/">
                  <i className="icon linkedin blue"></i>
                  LinkedIn
                </a>
                <a className="right floated" href="https://github.com/isabella-sandoval">
                  <i className="icon github pink"></i>
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="four wide column">
            <div className="ui link card teal inverted">
              <div className="image">
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQF1WMhFKFhFNQ/profile-displayphoto-shrink_400_400/0?e=1610582400&v=beta&t=hUAAaE4llHT9F4TqcCF5OBtSunAzs81Ja0PWdeY7hBM" alt="team-member" />
              </div>
              <div className="content">
                <div className="ui header teal"> Malcolm Reyes</div>
                <div className="meta">Loves cats more than gary</div>

                <div className="description">
                  Malcolm is a software engineer: enthusiastic about design and finding ways to improve existing technology .
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
