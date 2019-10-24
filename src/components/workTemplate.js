import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons"

const WorkTemplate = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              imageUrl
              info
              liveUrl
              githubUrl
              techs
            }
          }
        }
      }
    }
  `)

  return (
    <div className="works-flex">
      {allMarkdownRemark.edges.map((work, i) => {
        return (
          <div className="work">
            <img
              src={work.node.frontmatter.imageUrl}
              alt={work.node.frontmatter.title}
              className="work-image"
            />
            <h3>{work.node.frontmatter.title}</h3>
            <p className="work-info">{work.node.frontmatter.info}</p>
            <div className="work-techs">
              <p>
                <span>Built with: </span>
                {work.node.frontmatter.techs.includes("react") ? (
                  <label>
                    <FontAwesomeIcon icon={faReact} size="1x" />
                  </label>
                ) : null}
                {work.node.frontmatter.techs.includes("d3.js") ? (
                  <label>
                    <img
                      src="https://sam-hamburger.netlify.com/assets/d3.svg"
                      alt="d3.js"
                      className="custom-logo"
                    />
                  </label>
                ) : null}
              </p>
            </div>
            <div className="work-links">
              <a
                href={work.node.frontmatter.githubUrl}
                className="github coverIcon"
                target="_blank"
              >
                <label>
                  <FontAwesomeIcon icon={faGithub} size="1x" />
                </label>
              </a>
              <a
                href={work.node.frontmatter.liveUrl}
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
  )
}

export default WorkTemplate
