import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import gql from "graphql-tag"
import { Query } from 'react-apollo'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Query query={AllPosts}>
          {({ data, loading, error }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            
            return data.allPosts.map(post => 
              <div key={post.id}>
                <p>{post.title}: {post.text}</p>
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}

export const AllPosts = gql`
  query allPosts{
    allPosts {
      id
      title
      text
    }
  }
`
