import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons"

library.add(faHandPointLeft)

const Blog = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(blog)/" } }) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM Do, YYYY")
              path
              devCommUrl
            }
            timeToRead
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="blog-layout">
        <Layout>
          <SEO title="Blog | Sam Hamburger" />
          <AniLink
            to="/"
            swipe
            top="entry"
            direction="right"
            className="link-style"
          >
            <FontAwesomeIcon icon={"hand-point-left"} /> return to portfolio
            home.
          </AniLink>

          <div className="blog-header">
            <h1>Sam's Blog</h1>
            <p>Welcome to my talk space.</p>
          </div>
          <hr />
          {allMarkdownRemark.edges.map(work => {
            return (
              <AniLink
                className="blog-list-item"
                key={work.node.frontmatter.date}
                to={work.node.frontmatter.path}
                swipe
                top="entry"
                direction="left"
              >
                <div className="blog-list-item-outline">
                  <h3>{work.node.frontmatter.title}</h3>
                  <p>{work.node.frontmatter.date}</p>
                  <p>Reading time: {work.node.timeToRead} minutes</p>
                </div>
              </AniLink>
            )
          })}
        </Layout>
      </div>
      <Footer />
    </>
  )
}

export default Blog
