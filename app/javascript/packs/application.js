/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { Query } from 'react-apollo'
import ApolloClient from "apollo-boost"
import gql from "graphql-tag"
import Home from './Home'

const tokenElement = document.querySelector('meta[name="csrf-token"]')
const token = tokenElement && tokenElement.getAttribute("content")

const client = new ApolloClient({
  uri: '/graphql',
  request: operation => {
    operation.setContext({
      headers: { 
        'X-CSRF-Token': token, 
      }
    })
  }
})

const query = gql`
{
  allPosts {
    title
    content
  }
}
`

client.query({
  query
})
.then(result => console.log(result))

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
