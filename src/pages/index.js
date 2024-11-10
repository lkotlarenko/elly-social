import React from "react"
import BackgroundEffect from "../components/BackgroundEffect"
import CopyLinkItem from "../components/CopyLinkItem"
import LinkItem from "../components/LinkItem"
import links from "../data/links"
import "../styles/global.css"
import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <Seo
      title="Elly's Social Hub"
      description="A hub where you can find all the links to Elly's social profiles."
    />
    <div
      dangerouslySetInnerHTML={{
        __html:
          "<!-- Thanks to https://bsky.app/profile/TallThemiscyran.bsky.social for the cute assets and assistance with front-end coding development and troubleshooting! 🩷 -->",
      }}
    />
    <main>
      <BackgroundEffect />
      <h1 className="title">Elly's Socials:</h1>
      <div className="links-container">
        {links.map((link, index) =>
          link.type === "copy" ? (
            <CopyLinkItem
              key={index}
              icon={link.icon}
              text={link.text}
              copyValue={link.copyValue}
            />
          ) : (
            <LinkItem
              key={index}
              icon={link.icon}
              text={link.text}
              url={link.url}
            />
          )
        )}
      </div>
    </main>
  </>
)

export default IndexPage
