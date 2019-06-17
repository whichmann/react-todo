import React, { Component } from "react";
import axios from "axios";

class Caller extends Component {
  state = { posts: [] };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.setState({
        posts: res.data.slice(0, 10)
      });
    });
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.name}</span>
              <p>{post.company.catchPhrase}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet :|</div>
    );

    return <div className="container"><p className="center blue-text">You've discovered a secret page for my own axion reference!</p>{postList}</div>;
  }
}

export default Caller;
