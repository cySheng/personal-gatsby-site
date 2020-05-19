import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Buca from "../images/buca.png"
import Mssmr from "../images/mssmr.png"
import Dinosync from "../images/red_dino.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Sheng's Blog" />
    <section class="front-page">
      <h1>Hi, I'm Sheng & I'm a Web Developer</h1>
      <p>I’m passionate about improving the lives of professionals and organizations by utilizing new technologies.</p>
      {/* <img src="" alt="Sheng - Developer"> */}
    </section>

    <section class="portfolio">
      <section class="project">
        <h2>
          <a href="https://www.buca.my">
            BUCA
          </a>
        </h2>
        <img style={{ border: `2px solid rebeccapurple` }} src={Buca} alt="Front page design of the law firm MSSMR"/>
        <p>Progress: Ongoing <span role="img" aria-label="complete">♺</span></p>
        <p>Tech Stack: Ruby on Rails</p>
        <p>An application that assist Resident Associations in managing their security, payments and much more.</p>
      </section>
      <section class="project">
        <h2>
          <a href="https://mssmr.com/">
            MSSMR
          </a>
        </h2>
        <img style={{ border: `2px solid rebeccapurple` }} src={Mssmr} alt="Front page design of the law firm MSSMR"/>
        <p>Progress: Completed <span role="img" aria-label="complete">✅</span></p>
        <p>Tech Stack: Wordpress</p>
        <p>The client was a law firm who wanted a complete overhaul of their dated website. My team was involved in designing and developing the whole revamped website.</p>
      </section>
      <section class="project">
        <h2>Dinosync</h2>
        <img style={{ border: `2px solid rebeccapurple` }} src={Dinosync} alt="Front page design of Dinosync application "/>
        <p>Progress: Completed <span role="img" aria-label="completed">✅</span></p>
        <p>Tech Stack: Ruby on Rails</p>
        <p>My team worked with the client involved in prototyping a proof of concept application which primarily catered for e-commerce sellers. The application acted as a centralized inventory management system that assisted sellers in easily managing and update inventories on various different e-commerce platform.</p>
      </section>
    </section>
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
