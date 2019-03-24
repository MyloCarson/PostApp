import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {createPost } from '../../actions/postAction'

 class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }

    componentWillMount(){
        // this.props.createPost()
    }

    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        const post = {
            title: this.state.title,
            body: this.state.body,
            userId: 1
        }
        this.props.createPost(post)
    }

  render() {
    return (
      <div>
          <form className="form" onSubmit={this.onSubmit}>
          <h1>Add New Post</h1>
              <div>
                  <label>Title:</label><br/>
                  <input className="input" type="text" name="title" value ={this.state.title} onChange={this.onChange} />
              </div>
              <br/>
              <div>
                  <label>Body:</label><br/>
                  <textarea className="input" type="text" name="body" value ={this.state.body} onChange={this.onChange} />
              </div>
              <br/>
              <button className="btn" type="submit">Add</button>
          </form>
        
      </div>
    )
  }
}

Form.propTypes = {
    createPost: PropTypes.func.isRequired
}
export default connect(null, {createPost})(Form)