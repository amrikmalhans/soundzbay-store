import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/navbar'

const Layout = ({ children, site }) => (
  <div>
    <Helmet title="Soundzbay" />
    <Navbar />  
      <div className="Wrap">
        {children}
      </div>
      <div className="Wrap" >
        <div className="Footer">
          This website is just an example project to demonstrate how you can 
          integrate <a href="https://www.gatsbyjs.org/">Gatsby</a>, <a href="https://snipcart.com/">Snipcart</a> and <a href="https://www.datocms.com">DatoCMS</a>.
        </div>
      </div>
    </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

