import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../layouts/index"
import Products from '../components/products'
import Header from '../components/header'

export default () => (
  <StaticQuery
    query={graphql`
    query data {
      site {
        siteMetadata {
          siteName
        }
      }
    }
    `}
render={data => (
  <Layout site={data.site}>
    <Header />
    <Products />
  </Layout>
     )}
   />
)
