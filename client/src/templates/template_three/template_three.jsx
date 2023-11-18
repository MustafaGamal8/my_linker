import React, { useEffect, useState } from 'react';
import "./css/bootstrap.min.css"
import "./css/style.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import { GoLink } from "react-icons/go";
import { IoIosArrowRoundUp } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";


const TemplateThree = ({ userDetails }) => {
  const [details, setDetails] = useState(userDetails)
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

  }, [details]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      <div className="container-xxl bg-white p-0">
        {/* Spinner Start */}
        {
          loading && <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
            </div>
          </div>
        }

        {/* Spinner End */}
        {/* Navbar & Hero Start */}
        <div className="container-xxl position-relative p-0">


          <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="/" className="navbar-brand p-0 cursor-pointer">
              <img src="/assets/logo.png" alt="Logo"/>
            </a>
            <div className="navbar-nav mx-auto py-0  d-flex flex-row">
              <a href="#about" className="nav-link mx-2 lg-text-light">About</a>
              <a href="#skills" className=" nav-link mx-2" >Skills</a>
              <a href="#socialLinks" className=" nav-link mx-2" >SocialLinks</a>
              <a href="#projects" className=" nav-link mx-2 ">Projects</a>
            </div>
          </nav>


          <div id='about' className="container-xxl bg-primary hero-header "  >
            <div className="container px-lg-5">
              <div className="row g-5 align-items-center justify-content-around">
                <div className="col-lg-6 text-center text-lg-start ">
                  <h1 className="text-white mb-4 animated slideInDown  text-uppercase">{details.name}</h1>
                  <h4 className="text-white pb-3 animated slideInDown  text-capitalize">{details.job}</h4>
                  <p className="text-white pb-3 animated slideInDown">{details.about}</p>
                  <a target='_blank' href={details.followLink} className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Follow Me</a>
                  <a href={"mailto:" + details.email} className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>
                </div>
                <div className="col-lg-4 text-center text-lg-start">
                  <img className="img-fluid animated zoomIn w-100 rounded-circle " src={details.pictureId ? "https://mylinker-server.vercel.app/images/" + details.pictureId : "/assets/profile.jpeg"} alt="profile image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Navbar & Hero End */}

        {/* skills Start */}
        {
          details.skills &&
          <div id='skills' className="container-xxl py-5 ">
            <div className="container py-5 px-lg-5 text-capitalize">
              <div className="wow fadeInUp" >
                <p className="section-title text-secondary justify-content-center"><span />Skills<span /></p>
                <h1 className="text-center mb-5">What i can do</h1>
              </div>
              <div className="row g-4" data-aos="fade-up">
                {details.skills.map((skill, index) => (
                  <div key={index} className="col-lg-4 col-8 mx-auto wow fadeInUp fade-in"  >
                    <div className="feature-item bg-light rounded text-center p-4">
                      <i className="fa fa-3x fa-mail-bulk text-primary mb-4" />
                      <h5 className="mb-3">{skill.name}</h5>
                      <div className=' bg-primary' style={{ "width": skill.percentage + "%", "height": "5px" }}  ></div>
                      <p className="m-0 ">{skill.percentage}%</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        }

        {/* skills End */}

        {/* social Links Start */}
        {
          details.socialLinks && <div id='socialLinks' className="container-xxl py-5 text-capitalize">
            <div className="container py-5 px-lg-5">
              <div className="wow fadeInUp" data-wow-delay="0.1s">
                <p className="section-title text-secondary justify-content-center"><span />socialLinks<span /></p>
                <h1 className="text-center mb-5">my Social media</h1>
              </div>
              <div className="row g-4">
                {details.socialLinks && details.socialLinks.map((social, index) => (
                  <div key={index} className="col-lg-4 col-md-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item d-flex flex-column text-center rounded">
                      <div className="service-icon flex-shrink-0">
                        <GoLink />
                      </div>
                      <h5 className="mb-3">{social.site}</h5>
                      <a className="btn btn-square" target='_blank' href={social.link}>Visit</a>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        }
        {/* social Links End */}

        {/* Contact Start */}
        {details.email && (
          <div className="container-xxl bg-primary newsletter py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
              <div className="row justify-content-center">
                <div className="col-lg-7 text-center">
                  <p className="section-title text-white justify-content-center"><span />Work with me<span /></p>
                  <h1 className="text-center text-white mb-4">Stay Always In Touch</h1>
                  <div className="position-relative w-100 mt-3">
                    <input
                      className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                      type="text"
                      placeholder="Message Us"
                      style={{ height: 48 }}
                      value={message}
                      onChange={handleMessageChange}
                    />
                    <a
                      href={`mailto:${details.email}?subject=Inquiry from MyLinker&body=${encodeURIComponent(
                        message
                      )}`}
                      className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                    >
                      <BsFillSendFill />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Contact End */}

        {/* Projects Start */}

        {details.projects &&
          <div id='projects' className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
              <div className="wow fadeInUp" data-wow-delay="0.1s">
                <p className="section-title text-secondary justify-content-center"><span />Our Projects<span /></p>
                <h1 className="text-center mb-5">Recently Projects</h1>
              </div>
              <div className="row g-4 portfolio-container">
                {details.projects && details.projects.map((project, index) => (
                  <div key={index} className="col-lg-4 col-md-6 n portfolio-item first wow fadeInUp " data-wow-delay="0.1s">
                    <div className="rounded overflow-hidden h-100">
                      <div className="position-relative overflow-hidden">
                        <img className="img-fluid w-100 h-25" src={project.imgId ? "https://mylinker-server.vercel.app/images/" + project.imgId : '/assets/galaxy.jpg'} alt="project image" />
                        <div className="portfolio-overlay">
                          <a className="btn btn-square btn-outline-light mx-1" href={project.link} data-lightbox="portfolio"><FaEye /></a>
                        </div>
                      </div>
                      <div className="bg-light p-2 text-center text-capitalize">
                        <h5 className="lh-base mb-0">{project.name}</h5></div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        }

        {/* Projects End */}

        {/* Footer Start */}
        <div className="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
          <div className="container px-lg-5">
            <div className="copyright">
              <div className="row">
                <div className="col-md-12 text-center text-md-start mb-3 mb-md-0 ">
                  © <a className="border-bottom" href="/">MyLinker</a>, All Right Reserved.
                  {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                  Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-secondary btn-lg-square back-to-top"><IoIosArrowRoundUp /></a>
      </div>


    </>
  );


  
}

export default TemplateThree;
