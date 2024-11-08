import React from "react"

const LinkItem = ({ name, url, icon }) => {
  return (
    <a
      href={url}
      className="link-item"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img // CHANGE THE GITHUB USERNAME ON TO POINT TO YOUR REPOSITORY
        src={`https://github.com/lkotlarenko/link-hub/blob/main/src/images/${icon}`}
        alt={`${name} icon`}
        className="link-icon"
      />
      <span>{name}</span>
    </a>
  )
}

export default LinkItem
