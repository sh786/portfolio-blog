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
        <p>Filmed: April, 2020</p>
        <p>
          Aerial shots from Point Park of Heinz Field and downtown Pittsburgh.
        </p>
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
        <p>Filmed: May, 2019</p>
        <p>Drone footage of TPC Dorado and Isla Verde beach.</p>
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
        <p>Filmed: August, 2018</p>
        <p>
          Flyovers from the Atlantic Ocean near West Beach in Beverly Farms.
        </p>
      </div>
    </div>
  )
}

export default Drone
