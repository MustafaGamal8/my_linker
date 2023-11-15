
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

const TemplateTwo = ({ userDetails }) => {
  const [details, setDetails] = useState(userDetails)

  return (
    <>
        <main className="flex-shrink-0">

          {/* navbar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
            <div className="container px-5">
              <a className="navbar-brand cursor-pointer" href="/"><span className="fw-bolder text-primary">MyLinker</span></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                  <li className="nav-item text-capitalize"><a className="nav-link" href="#header">Home</a></li>
                  <li className="nav-item text-capitalize"><a className="nav-link" href="#about">about</a></li>
                  <li className="nav-item text-capitalize"><a className="nav-link" href="#skills">skills</a></li>
                  <li className="nav-item text-capitalize"><a className="nav-link" href="#projects">Projects</a></li>
                </ul>
              </div>
            </div>
          </nav>
          {/* header */}
          <header className="py-5 " id='header'>
            <div className="container px-5 pb-5 mx-auto">
              <div className="row gx-5 align-items-center">
                <div className="col-xxl-5">
                  <div className="text-center text-xxl-start">
                    <div className="fs-3 fw-light text-muted text-capitalize">{details.job}</div>
                    <h1 className="display-3 fw-bolder mb-5 text-capitalize text-primary">{details.name}</h1>
                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                      <Link className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" to={`mailto:${details.email}`}>conatct</Link>
                      <Link className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" to="projects">Projects</Link>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-7">
                  <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                    <div className="profile bg-primary-to-secondary mx-auto ">
                      <img className=" rounded w-75  shadow   " src={details.pictureId ? "https://mylinker-server.vercel.app/images/" + details.pictureId :  "/assets/profile.jpeg"} alt="..." />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* about */}
          <section className="bg-light py-5" id='about'>
            <div className="container px-5">
              <div className="row gx-5 justify-content-center">
                <div className="col-xxl-8">
                  <div className="text-center my-5">
                    <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">About Me</span></h2>
                    <p className="lead fw-light mb-4">{details.about}</p>
                    <div className="d-flex justify-content-center fs-2 gap-4">
                      <Link className="text-gradient" to="#!"><i className="bi bi-twitter" /></Link>
                      <Link className="text-gradient" to="#!"><i className="bi bi-linkedin" /></Link>
                      <Link className="text-gradient" to="#!"><i className="bi bi-github" /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          { /* projects */}
          <section className="py-5">
            <div className="container px-5 mb-5">
              <div className="text-center mb-5">
                <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
              </div>
              <div className="row gx-5  justify-content-center">
                  {details.projects &&  details.projects.map((project, index) => (
                <div className="col-lg-11 col-xl-9 col-xxl-8 card-shadow">
                  <div className="card shadow  rounded-4 border-0 mb-5">
                  <div className="card-body p-0">
                    <div className="d-flex align-items-center">
                      <div className="p-5">
                        <h2 className="fw-bolder">{project.name}</h2>
                        <Link className="btn btn-outline-primary btn-lg px-5 py-3 fs-6 fw-bolder">Visit</Link>
                        
                        </div>
                      <img className="img-fluid h-100 w-50" src={ project.imgId ? "https://mylinker-server.vercel.app/images/" + project.imgId : "https://dummyimage.com/300x400/343a40/6c757d"} alt="..." />
                    </div>
                  </div>
                </div>
                </div>
                  ))}
              </div>
            </div>
            <section className="py-5 bg-gradient-primary-to-secondary text-white">
              <div className="container px-5 my-5">
                <div className="text-center">
                  <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
                  <a className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="contact.html">Contact me</a>
                </div>
              </div>
            </section>
          </section>




        </main>




        <footer className="bg-white py-4 mt-auto">
          <div className="container px-5">
            <div className="row align-items-center justify-content-between flex-column flex-sm-row">
              <div className="col-auto"><div className="small m-0">Copyright © Msuatfa Gamal 2023</div></div>
              <div className="col-auto">
                <Link className="small" target='_blank' to="https://www.facebook.com/mustafa.gamal.9231712/">Facebook</Link>
                <span className="mx-1">·</span>
                <Link className="small" target='_blank' to="https://www.linkedin.com/in/mustafa-gamal-ba48a7243/">Linkedin</Link>
                <span className="mx-1">·</span>
                <Link className="small" target='_blank' to="mailto:mustafagamal51112@gmail.com">Contact</Link>
              </div>
            </div>
          </div>
        </footer>

    </>
  );
}

export default TemplateTwo;

