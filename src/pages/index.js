import React from "react"
import LinkItem from "../components/LinkItem"
import links from "../data/links"
import "../styles/global.css"
import Seo from '../components/seo';

const IndexPage = () => (
  <>
    <Seo
      title="Elly's Social Hub"
      description="A hub where you can find all the links to Elly's social profiles."
    />
    <main>
      <h1>Elly's Socials:</h1>
      <div className="links-container">
        {links.map(link => (
          <LinkItem key={link.url} {...link} />
        ))}
      </div>
    </main>
  </>
)

export default IndexPage
