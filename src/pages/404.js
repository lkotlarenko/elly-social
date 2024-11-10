import * as React from "react"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <>
    <Seo
      title="404: Not Found"
      description="A hub where you can find all the links to Elly's social profiles."
    />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `var(--size-content)`,
        padding: `var(--size-gutter)`,
      }}
    >
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </>
)

export default NotFoundPage
