import React from "react"
import { Link } from "gatsby"
import { FiTwitter, FiGithub } from "react-icons/fi"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="A Bootstrapped Company of One - MVP Stack" />
    <Projects />

    <div className="contact">
      <h3 className="h3-heading">Contact</h3>
      <p>
        If you have <span>any question</span> or wants to convert your{" "}
        <span>idea</span> into MVP in <span>days</span> just drop mail at{" "}
        <span>hello@mohddanish.me</span>
      </p>
      <ul className="social-links">
        <li>
          <a href="https://twitter.com/mddanishyusuf" target="_blank">
            <FiGithub /> <span>Twitter</span>
          </a>
        </li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
