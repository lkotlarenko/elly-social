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
        <img
          src={`https://github.com/lkotlarenko/link-hub/blob/main/src/images/${icon}?raw=true`}
          alt={`${name} icon`}
          className="link-icon"
        />
        <span className="link-text">{name}</span>
      </div>
    </a>
  )
}

export default LinkItem
