import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import { Query } from 'react-apollo'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from "apollo-boost"
import gql from "graphql-tag"

import Layout from '../components/Layout'
import Home from '../components/Home'

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

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <ApolloProvider client={client}>
        <Layout>
          <Home />
        </Layout>
      </ApolloProvider>
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})

