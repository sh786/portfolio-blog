import React, { useRef } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const mockWorks = [
  {
    title: "Example A",
    info:
      "This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.",
    imageUrl: "https://create-react-app.dev/img/logo.svg",
    githubUrl: "https://github.com/sh786/postseason",
    liveUrl: "https://sh786.github.io/postseason/",
    techs: ["react", "node"],
  },
  {
    title: "Example B",
    info:
      "This is example B project.This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.",
    imageUrl: "https://create-react-app.dev/img/logo.svg",
    githubUrl: "https://github.com/sh786/postseason",
    liveUrl: "https://sh786.github.io/postseason/",
    techs: ["react", "node"],
  },
  {
    title: "Example C",
    info:
      "This is example C project.This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.",
    imageUrl: "https://create-react-app.dev/img/logo.svg",
    githubUrl: "https://github.com/sh786/postseason",
    liveUrl: "https://sh786.github.io/postseason/",
    techs: ["react", "node"],
  },
  {
    title: "Example D",
    info:
      "This is example D project.This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.This is example A project.",
    imageUrl: "https://create-react-app.dev/img/logo.svg",
    githubUrl: "https://github.com/sh786/postseason",
    liveUrl: "https://sh786.github.io/postseason/",
    techs: ["react", "node"],
  },
]

const scrollToRef = ref =>
  window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" })

const IndexPage = () => {
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  return (
    <Layout>
      <SEO title="Home" />
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
          </div>
        </div>
        {/* <div className='nav'>
        <ul>
          <li>Title</li>
          <li>Works</li>
        </ul>
      </div> */}
        <div className="works-flex" ref={myRef}>
          {mockWorks.map((work, i) => {
            return (
              <div className="work">
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="work-image"
                />
                <h3>{work.title}</h3>
                <p className="work-info">{work.info}</p>
                <div className="work-techs">
                  <p>
                    <span>Built with: </span>
                    {work.techs.includes("react") ? (
                      <label>
                        <FontAwesomeIcon icon={faReact} size="1x" />
                      </label>
                    ) : null}
                  </p>
                </div>
                <div className="work-links">
                  <a
                    href={work.githubUrl}
                    className="github coverIcon"
                    target="_blank"
                  >
                    <label>
                      <FontAwesomeIcon icon={faGithub} size="1x" />
                    </label>
                  </a>
                  <a
                    href={work.liveUrl}
                    className="globe coverIcon"
                    target="_blank"
                  >
                    <label>
                      <FontAwesomeIcon icon={faGlobeAmericas} size="1x" />
                    </label>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
