import React from "react"

const LinkItem = ({ name, url, icon }) => {
  return (
    <a
      href={url}
      className="link-item"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="link-content">
        <img src={`${icon}`} alt={`${name} icon`} className="link-icon" />
        <span className="link-text">{name}</span>
      </div>
    </a>
  )
}

export default LinkItem
