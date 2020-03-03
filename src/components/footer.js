import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"

import GatsbyIcon from "../images/Gatsby-Logo.svg"

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Developed by Sam Hamburger using{" "}
        <FontAwesomeIcon className="react-color" icon={faReact} /> and{" "}
        <img src={GatsbyIcon} height={13} />.
      </p>
    </div>
  )
}

export default Footer
