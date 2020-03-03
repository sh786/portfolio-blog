import React, { useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase, faBlog } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import WorkTemplate from "../components/workTemplate"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const scrollToRef = ref =>
  window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" })

const IndexPage = () => {
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  return (
    <Layout>
      <SEO title="Sam Hamburger - Portfolio" />
      <div className="App">
        <div className="cover-flex">
          <h1>Sam Hamburger</h1>
          <h4>New York, NY</h4>
          <div className="links">
            <a className="works coverIcon" onClick={executeScroll}>
              <label>
                <FontAwesomeIcon icon={faBriefcase} size="2x" />
                <span className="icon-label">works</span>
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
        <div ref={myRef}>
          <WorkTemplate />
        </div>
        <Footer />
      </div>
    </Layout>
  )
}

export default IndexPage
