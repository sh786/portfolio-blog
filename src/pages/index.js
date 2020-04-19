import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBriefcase,
  faBlog,
  faFileAlt,
  faPlane,
} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import scrollTo from "gatsby-plugin-smoothscroll"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Drone from "../components/drone"
import Footer from "../components/footer"
import WorkTemplate from "../components/workTemplate"
import resume from "../../static/assets/samsonhamburgerresume-master.pdf"

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Portfolio | Sam Hamburger" />
      <div className="App">
        <div className="cover-flex">
          <h1>Sam Hamburger</h1>
          <h4>New York, NY</h4>
          <div className="links">
            <a className="works coverIcon" onClick={() => scrollTo("#works")}>
              <label>
                <FontAwesomeIcon icon={faBriefcase} size="2x" />
                <span className="icon-label">works</span>
              </label>
            </a>
            <a
              className="drone-link coverIcon"
              onClick={() => scrollTo("#drone")}
            >
              <label>
                <FontAwesomeIcon icon={faPlane} size="2x" />
                <span className="icon-label">drone</span>
              </label>
            </a>
            <a
              href="https://www.github.com/sh786"
              className="github coverIcon"
              target="_blank"
            >
              <label>
                <FontAwesomeIcon icon={faGithub} size="2x" />
                <span className="icon-label">github</span>
              </label>
            </a>
            <a
              href="https://www.linkedin.com/in/samhamburger/"
              className="linkedin coverIcon"
              target="_blank"
            >
              <label>
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                <span className="icon-label">linkedin</span>
              </label>
            </a>
            <a href={resume} className="coverIcon" target="_blank">
              <label>
                <FontAwesomeIcon icon={faFileAlt} size="2x" />
                <span className="icon-label">resume</span>
              </label>
            </a>
            <AniLink to="/blog" swipe top="entry" direction="left">
              <a className="coverIcon">
                <label>
                  <FontAwesomeIcon icon={faBlog} size="2x" />
                  <span className="icon-label">blog</span>
                </label>
              </a>
            </AniLink>
          </div>
        </div>
        <div id="works">
          <WorkTemplate />
        </div>
        <div id="drone">
          <Drone />
        </div>
        <Footer />
      </div>
    </Layout>
  )
}

export default IndexPage
