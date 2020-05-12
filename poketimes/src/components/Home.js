import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'



class Home extends Component {
  
  render() {
    console.log(this.props);
  
    const {posts} = this.props;
    const postList = posts.length ?(
      posts.map(posts => {
        return (
        <div className="post card" key={posts.id}>
          <img src={Pokeball} alt="a pokeball"/>
          <div className="card-content">
            <Link to={'/' + posts.id}>
              <span className="card-title red-text">{posts.title}</span>
            </Link>
            
            <p>{posts.body}</p>
          </div>
        </div>
        )
      })
    ) : (
      <div className="center">No posts Yet</div>
    )
      return (
        <div className="container home">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)