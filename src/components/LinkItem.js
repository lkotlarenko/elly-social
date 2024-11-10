import React from "react"

const LinkItem = ({ text, url, icon }) => {
  return (
    <a
      href={url}
      className="link-item"
      target="_blank"
      rel="noopener noreferrer"
      alt={`${text} URL button`}
    >
      <div className="link-content">
        <img src={`${icon}`} alt={`${text} icon`} className="link-icon" />
        <span className="link-text">{text}</span>
      </div>
    </a>
  )
}

export default LinkItem
