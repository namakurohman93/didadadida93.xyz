/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "./layout"
// @ts-ignore
import Hero from "../texts/hero"

const Homepage = () => {
  return (
    <Layout>
      <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 2 } }}>
        <Hero />
      </section>
    </Layout>
  )
}

export default Homepage
