import React, { useState, useEffect } from "react";
import axios from "axios";

function Caller() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      setPosts(res.data.slice(0, 10))
    });
  })

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

export default Caller;
