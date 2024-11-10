import React from "react"
import LinkItem from "../components/LinkItem"
import links from "../data/links"
import "../styles/global.css"
import Seo from "../components/seo"
import BackgroundEffect from "../components/BackgroundEffect" // Import the new component

const IndexPage = () => (
  <>
    <Seo
      title="Elly's Social Hub"
      description="A hub where you can find all the links to Elly's social profiles."
    />
    <main>
      <BackgroundEffect />
      <h1 className="title">Elly's Socials:</h1>
      <div className="links-container">
        {links.map(link => (
          <LinkItem key={link.url} {...link} />
        ))}
      </div>
    </main>
  </>
)

export default IndexPage
