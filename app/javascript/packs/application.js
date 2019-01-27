/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import gql from "graphql-tag"
import { Query } from 'react-apollo'
import ApolloClient from "apollo-boost"
import $ from "jQuery"

const query = gql`
{
  allPosts {
    title
    content
  }
}
`

const client = new ApolloClient({
  uri: '/graphql',
  request: operation => {
    operation.setContext({
      headers: { 
        'X-CSRF-Token': $("meta[name=csrf-token]").attr("content"), 
      }
    })
  }
})

client.query({
  query
})
.then(result => console.log(result))


require('./hello_react.jsx')
