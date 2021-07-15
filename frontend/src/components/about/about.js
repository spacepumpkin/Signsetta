import React from 'react';
import { Form, TextArea } from 'semantic-ui-react'
import profileGary from "../../images/profilepic-gary.png";
import profileBella from '../../images/profilepic-bella.png';
import profileBrandon from '../../images/profilepic-brandon.jpg';
import profileMalcolm from '../../images/profilepic-malcolm.jpg';
import aboutImage from '../../images/about-pic.png';

// import { Container } from 'semantic-ui-react';

export default function About() {
  return (
    <div>
      <div className="ui vertical footer">
        <div className="ui center aligned container inverted">
        <br />
          <h1 className="ui stackable header pink">
            Our Mission
          </h1>
          <div className="ui divider grey"></div>
          <br />
          
          <div className="image">
                  <img src= {aboutImage} className=" ui large centered rounded image"
                     style={{ filter: 'grayscale(100%)' }}
                  />
          </div>
          <br />

            <div className="ui left aligned text container">
              We at Signsetta have one goal: to make learning American Sign Language (ASL) 
              easier and more accessible to those who wish to learn it. We have seen through 
              our research that while there are many ways to learn ASL, there is not a great 
              resource that contains a combination of pictures, definitions, lesson plans, 
              and sign language learning games. We designed Signsetta primarily as a tool for 
              preliminary learners, but we also strive to make Signsetta helpful to anyone 
              learning ASL regardless of their learning level. We aim to provide ASL learners 
              with easy to understand flashcards, games that enhance their comprehension of ASL, 
              and profiles that allow each user to customize their own learning.
            </div>
        </div>
        <br />
      </div>


      <div className="ui vertical footer">
        <div className="ui center aligned container inverted">
        <br />
          <h1 className="ui stackable header pink">
            The Team
          </h1>
          <div className="ui divider grey"></div>
          <br />
          <div className="ui stackable relaxed grid">
            <div className="four wide column">
              <div className="ui link card teal inverted">
                <div className="image">
                  <img src="https://media-exp1.licdn.com/dms/image/C5603AQE_pPYBSkbvsg/profile-displayphoto-shrink_400_400/0/1544901637387?e=1616630400&v=beta&t=IvdEbV1P2Md_S42nQ9P4wlyVfhyXCTygFSTf8d9UFw4"
                    onError={(evt) => { if (evt.currentTarget && evt.currentTarget.src !== profileBrandon) evt.currentTarget.src = profileBrandon; }}
                    alt="profile pic"
                    style={{ filter: 'grayscale(100%)' }}
                  />
                </div>
                <div className="content">
                  <div className="ui header teal"> Brandon Leong </div>
                  <div className="meta"> Loves cats more than Bella </div>
                  <div className="description">
                    Brandon is a software engineer dedicated to self-improvement and crafting positive user experiences.
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
                  <img src="https://media-exp1.licdn.com/dms/image/C5603AQEtbHNVEWimVQ/profile-displayphoto-shrink_200_200/0/1604962227644?e=1616630400&v=beta&t=ycKPrJq-un2hi80ZetmS_j6A8hCTexTj8gNzvgLfNsA"
                    onError={(evt) => { if (evt.currentTarget && evt.currentTarget.src !== profileBella) evt.currentTarget.src = profileBella; }}
                    alt="profile pic"
                    style={{ filter: 'grayscale(100%)' }}
                  />
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
                  <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFtFpi8YcPTKQ/profile-displayphoto-shrink_200_200/0?e=1611792000&v=beta&t=0bsNBD1npqZYzNPA7J-tTXkdyn_Ne9c7nbomjv_v-vE"
                    onError={(evt) => { if (evt.currentTarget && evt.currentTarget.src !== profileMalcolm) evt.currentTarget.src = profileMalcolm; }}
                    alt="team-member"
                    style={{ filter: 'grayscale(100%)' }}
                  />
                </div>
                <div className="content">
                  <div className="ui header teal"> Malcolm Reyes</div>
                  <div className="meta">Loves cats more than Gary</div>

                  <div className="description">
                    Malcolm is a software engineer: enthusiastic about design and finding ways to improve existing technology.
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
                  <img src={profileGary} alt="profile pic" style={{ filter: 'grayscale(100%)' }} />
                </div>
                <div className="content">
                  <div className="ui header teal"> Gary Wan </div>
                  <div className="meta"> Loves cats more than Brandon </div>
                  <div className="description">
                    Gary is a medical/healthcare worker turned full-stack software engineer with a focus on design and user engagement.
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
          <br />


              <h1 className="ui stackable header pink">
                  Contact Us
              </h1>

              <div className="ui divider grey"></div>
                  <form className="ui form">
                  
                    <Form.Input
                      placeholder='Name'
                    />
                  
                    <Form.Input
                      placeholder='Email'
                    />
                    <Form.Input
                      control={TextArea}
                      placeholder='Your message'
                      rows="3"
                    />

                    <button class="ui button">Submit</button>
                  </form>
            </div>
        </div>
        <br />
        <br />
      </div>
  )
}
