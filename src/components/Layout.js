import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('https://kpaofmartinsville.com')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('https://kpaofmartinsville.com')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('https://kpaofmartinsville.com')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('https://kpaofmartinsville.com')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://kpaofmartinsville.com" />
        <meta
          property="og:image"
          content={`${withPrefix('https://kpaofmartinsville.com')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
