import React, { useState } from 'react';
import './assets/bootstrap.min.css';
import './assets/style.css';

import { IoIosLink } from "react-icons/io";

const TeamplateFour = ({ userDetails }) => {
  const [details, setDetails] = useState(userDetails)
  return (
    <><div>
      {/* header start */}
      <header className="top-area">
        <div className="header-area">
          <nav className="navbar  bootsnav ">
            
              <a  href="/"><img className='img-fluid h-20 ' src="/assets/logo.png" alt="" /></a>
            
            <ul className="  nav  navbar-right  " data-in="fadeInDown" data-out="fadeOutUp">
              <li className="smooth-menu "><a href="#about">about</a></li>
              <li className="smooth-menu "><a href="#skills">skills</a></li>
              <li className="smooth-menu "><a href="#socialLinks">SocialLinks</a></li>
              <li className="smooth-menu "><a href="#projects">projects</a></li>
            </ul>

          </nav>
        </div>
        <div className="clearfix" />
      </header>
      <div style={{ height: 70 }} />
      {/* header end */}

      {/*welcome-hero start */}
      <section style={{ backgroundImage: `url(${details.coverId ?"https://mylinker-server.vercel.app/images/" + details.coverId : "/assets/galaxy.jpg"})` }} id="welcome-hero" className="welcome-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="header-text">
                <h2>hi <span>,</span> i am <br /> {details.name}<span>.</span> </h2>
                <p >{details.job}</p>

                {details.followLink &&
                  <a className='m-6' target='_blank' href={details.followLink} >Follow  me</a>
                }
                {details.email &&
                  <a className='m-6' href={"mailto:" + details.email} >Conatct me</a>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*welcome-hero end */}

      {/*about start */}
      <section id="about" className="about">
        <div className="section-heading text-center">
          <h2>about me</h2>
        </div>
        <div className="container">
          <div className="about-content">
            <div className="row">
              <div className="col-sm-8 col-md-7">

                <h2 className='text-uppercase  text-center text-primary   mb-4'>
                  {details.name}
                </h2>
                <h3 className='mt-7' >
                  {details.about}
                </h3>

                {/* <div className="row">
                <div className="col-sm-4">
                  <div className="single-about-add-info">
                    <h3>phone</h3>
                    <p>Under Construction</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-about-add-info">
                    <h3>email</h3>
                    <p>{details.email}</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-about-add-info">
                    <h3>website</h3>
                    <p>{details.followLink}</p>
                  </div>
                </div>
              </div> */}
              </div>

              <div className="col-sm-offset-1 col-sm-4  mt-7 ">
                <div className="single-about-img ">
                  <img src={details.pictureId ? `https://mylinker-server.vercel.app/images/${details.pictureId}` : "/assets/galaxy.jpg"} alt="profile_image" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{/*/.about*/}
      {/*about end */}



      {/*skills start */}
      {
        details.skills &&
        <section id="skills" className="skills">
          <div className="skill-content">
            <div className="section-heading text-center">
              <h2>skills</h2>
            </div>
            <div className="container ">
              <div className="row">
                {
                  details.skills.map((skill, index) => (
                    <div className="col-md-6">
                      <div className="single-skill-content">
                        <div className="barWrapper">
                          <span className="progressText">{skill.name}</span>
                          <div className="single-progress-txt">
                            <div className="progress ">
                              <div style={{ width: `${skill.percentage}%` }} className="progress-bar"  >
                              </div>
                            </div>
                            <h3>{skill.percentage}%</h3>
                          </div>
                        </div>

                      </div>
                    </div>

                  ))
                }



              </div>{/* /.row */}
            </div> {/* /.container */}
          </div>{/* /.skill-content*/}
        </section>
      }


      {/*skills end */}
      {/*socialLinks start */}
      {details.socialLinks && <section id="socialLinks" className="profiles">
        <div className="profiles-details">
          <div className="section-heading text-center">
            <h2>socialLinks</h2>
          </div>
          <div className="container">
            <div className="profiles-content">
              <div className="container">
                <div className="row ">
                  {
                    details.socialLinks.map((socialLink, index) => (

                      <div className="col-sm-3  overflow-hidden rounded-4 m-2 " style={{ borderBottom: '3px #cb30fc solid', borderTop: '3px #cb30fc solid', borderRadius: 5 }}>

                        <div className="single-profile profile-no-border">
                          <div className="profile-txt">
                            <a ><IoIosLink /></a>
                            <div className="profile-icon-name">{socialLink.site}</div>
                          </div>
                          <div className="single-profile-overlay  ">
                            <a href={socialLink.link} target='_blank' className="profile-txt cursor-pointer">
                              <div className="profile-icon-name">{socialLink.site}</div>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))
                  }

                </div>
              </div>
            </div>
          </div>
        </div></section>
      }
      {/*socialLinks end */}

      {/*projects start */}
      {
        details.projects &&

        <section id="projects" className="portfolio">
          <div className="portfolio-details">
            <div className="section-heading text-center">
              <h2>Projects</h2>
            </div>
            <div className="container">
              <div className="portfolio-content">
                <div className="isotope row justify-content-center"> {/* Center the content */}
                  {details.projects.map((project, index) => (
                    <div key={index} className=" col-md-6 mb-4">
                      <div className="item">
                        <img
                          src={project.imgId ? `https://mylinker-server.vercel.app/images/${project.imgId}` : "/assets/galaxy.jpg"}
                          alt="portfolio image"
                          className="img-fluid"
                        />
                        <div className="isotope-overlay">
                          <a target="_blank" rel="noopener noreferrer" href={project.link}>
                            <h2 className="text-white text-capitalize">{project.name}</h2>
                          </a>
                        </div>{/* /.isotope-overlay */}
                      </div>{/* /.item */}
                    </div>
                  ))}
                </div>{/* /.isotope */}
              </div>{/* /.portfolio-content */}
            </div>{/*/.container*/}
          </div>{/* /.portfolio-details */}
        </section>
      }

      {/*projects end */}



      {/*footer-copyright start*/}
      <footer id="footer-copyright" className="footer-copyright">
        <div className="container">
          <div className="hm-footer-copyright text-center">
            <p>
              © copyright <a style={{ textDecoration: 'underline' }} href="/">MyLinker</a>. design and developed by <a href="https://www.themesine.com/">themesine</a>
            </p>{/*/p*/}
          </div>{/*/.text-center*/}
        </div>{/*/.container*/}
        <div id="scroll-Top">
          <div className="return-to-top">
            <i className="fa fa-angle-up " id="scroll-top" />
          </div>
        </div>{/*/.scroll-Top*/}
      </footer>{/*/.footer-copyright*/}
      {/*footer-copyright end*/}
    </div>



    </>
  );
}

export default TeamplateFour;
