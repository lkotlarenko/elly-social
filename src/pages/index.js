import React from "react"
import LinkItem from "../components/LinkItem"
import links from "../data/links"
import "../styles/global.css"

const IndexPage = () => (
  <main>
    <h1>elly's socials:</h1>
    <div className="links-container">
      {links.map(link => (
        <LinkItem key={link.url} {...link} />
      ))}
    </div>
  </main>
)

export default IndexPage
