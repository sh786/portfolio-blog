import React from "react"

import PittsburghDrone from "../images/pittsburgh-drone.png"

const Drone = () => {
  return (
    <div className="drone">
      <div className="drone-item">
        <div className="drone-item-img-container">
          <iframe
            src="https://www.youtube.com/embed/VbGUcpn2a8E"
            title="Pittsburgh Flight"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          />
        </div>
        <h3 className="drone-item-title">Pittsburgh</h3>
      </div>
      <div className="drone-item">
        <div className="drone-item-img-container">
          <iframe
            src="https://www.youtube.com/embed/WUlVBswaLOE"
            title="Puerto Rico"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          />
        </div>
        <h3 className="drone-item-title">Puerto Rico</h3>
      </div>
      <div className="drone-item">
        <div className="drone-item-img-container">
          <iframe
            src="https://www.youtube.com/embed/MiqihoXwaVk"
            title="Beverly, MA"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          />
        </div>
        <h3 className="drone-item-title">Beverly, MA</h3>
      </div>
    </div>
  )
}

export default Drone
