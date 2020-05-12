import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
  state = {
    posts: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response);
        this.setState({
          posts: response.data.slice(0,10)
        })
      })
}

  render() {
    const {posts} = this.state;
    const postList = posts.length ?(
      posts.map(posts => {
        return (
        <div className="post card" key={posts.id}>
          <div className="card-content">
            <span className="card-title">{posts.title}</span>
            <p>{posts.body}</p>
          </div>
        </div>
        )
      })
    ) : (
      <div className="center">No posts Yet</div>
    )
      return (
        <div className="container">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      )
  }
  
  
}

export default Home