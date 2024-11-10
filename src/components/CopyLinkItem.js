import React, { useState } from "react"
import "../styles/global.css"

const CopyLinkItem = ({ icon, text, copyValue }) => {
  const [showModal, setShowModal] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(copyValue).then(() => {
      setShowModal(true)
      setTimeout(() => setShowModal(false), 2900)
    })
  }

  const handleKeyPress = e => {
    if (e.key === "Enter" || e.key === " ") {
      handleCopy()
    }
  }

  return (
    <>
      <div
        className="link-item"
        onClick={handleCopy}
        onKeyDown={handleKeyPress}
        role="button"
        tabIndex={0}
        alt={`${text} friend code copy button`}
      >
        <div className="link-content">
          {icon && (
            <img src={icon} alt={`${text} icon`} className="link-icon" />
          )}
          <span className="link-text">{text}</span>
        </div>
      </div>
      {showModal && (
        <div className="copy-modal">Friend code copied to clipboard :3</div>
      )}
    </>
  )
}

export default CopyLinkItem
