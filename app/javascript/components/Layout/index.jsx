import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Post from '../Post'

const Layout = ({ children }) => (
  <div>
    <Router path='/post' component={Post} />
    <Link to='/post'>post</Link>
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
