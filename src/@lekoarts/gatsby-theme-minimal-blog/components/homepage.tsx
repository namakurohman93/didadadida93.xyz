/** @jsx jsx */
import { jsx } from "theme-ui"
import { HeadFC } from "gatsby"
import Layout from "./layout"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import Hero from "../texts/hero.mdx"

const Homepage = () => {
  return (
    <Layout>
      <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 2 }, variant: `section_hero` }}>
        <Hero />
      </section>
    </Layout>
  )
}

export default Homepage

export const Head: HeadFC = () => <Seo />
