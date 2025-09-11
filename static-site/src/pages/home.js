import React from "react";
import { Link } from "react-router-dom";
import posts from "../posts/posts.json";
import "../index.css";

export default function Home() {
  return (
    <div className="container">
      <h1>Static Site</h1>
      <ul className="post-list">
        {posts.map((post) => (
          <div key={post.id} style={{ marginBottom: "2rem" }}>
            <h2>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h2>
            <p>{post.content}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
