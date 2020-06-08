import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Buca from "../images/buca.png"
import Mssmr from "../images/mssmr.png"
import Dinosync from "../images/red_dino.png"
import ProfilePic from "../images/profile-pic.jpg"

const IndexPage = () => (
  <Layout>
    <SEO/>
    <section class="front-page">
      <section class="container">
        <article class="introduction">
          <h1>Hi, I'm Sheng & I'm a Web Developer</h1>
          <p>I’m passionate about improving the lives of people and organizations through technology.</p>
        </article>
        <img src={ProfilePic} alt="Myself"/>
      </section>
      {/* <img src="" alt="Sheng - Developer"> */}
    </section>

    <section class="portfolio">
      <section class="portfolio-container">
        <h2>Projects</h2>
        <section class="projects">
          <section class="project">
            <section class="header">
              <h3>
                <a href="https://www.buca.my">
                  BUCA
                </a>
              </h3>
            </section>
            <img src={Buca} alt="Front page design of the law firm MSSMR"/>
            <section class="content">
              <p><span class="label">Progress</span>: Completed <span role="img" aria-label="complete">✅</span></p>
              <p><span class="label">Tech Stack</span>: Ruby on Rails</p>
              <p>The Resident Association Solution.</p>
            </section>
          </section>
          <section class="project">
            <section class="header">
              <h3>
                <a href="https://mssmr.com/">
                  MSSMR
                </a>
              </h3>
            </section>
            <img src={Mssmr} alt="Front page design of the law firm MSSMR"/>
            <section class="content">
              <p><span class="label">Progress</span>: Completed <span role="img" aria-label="complete">✅</span></p>
              <p><span class="label">Tech Stack</span>: Wordpress</p>
              <p>The Law Service.</p>
            </section>
          </section>
          <section class="project">
            <section class="header">
              <h3>Dinosync</h3>
            </section>
            <img src={Dinosync} alt="Front page design of Dinosync application "/>
            <section class="content">
              <p><span class="label">Progress</span>: Completed <span role="img" aria-label="completed">✅</span></p>
              <p><span class="label">Tech Stack</span>: Ruby on Rails</p>
              <p>Rapid prototype of the Marketplace Integration solution.</p>
            </section>
          </section>
        </section>
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
