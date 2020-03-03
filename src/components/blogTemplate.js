import React from "react"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Footer from "./footer"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, timeToRead } = markdownRemark
  return (
    <>
      <div className="blog-post-container">
        <AniLink
          to="/blog"
          swipe
          top="entry"
          direction="right"
          className="link-style"
        >
          <FontAwesomeIcon icon={faHandPointLeft} /> return to blog home.
        </AniLink>
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2 className="date">
            {frontmatter.date} • {timeToRead} min •{" "}
            {frontmatter.tags.map(tag => (
              <span>#{tag} </span>
            ))}
          </h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM Do, YYYY")
        path
        tags
        title
      }
      timeToRead
    }
  }
`
