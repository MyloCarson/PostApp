import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchPosts} from '../../actions/postAction'

class Posts extends Component {
    componentWillMount(){
       this.props.fetchPosts()
    }

    componentWillReceiveProps(nextProps){
      if(nextProps.newPost){
        this.props.posts.unshift(nextProps.newPost)
      }
    }
  render() {
      const postItems = this.props.posts.map( (post,index) => (
          <div key={post.id} className="post-wrapper">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
      ))
    return (
      <div>
        <h1>Posts</h1>
        <div className="post-container">
            {postItems}
          </div>
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

export default  connect(mapStateToProps, { fetchPosts })(Posts)
