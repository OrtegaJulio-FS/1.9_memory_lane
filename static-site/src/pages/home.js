import React from "react";
import { Link } from "react-router-dom";
import posts from "../posts/posts.json";

export default function Home() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>My Blog</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "2rem" }}>
          <h2>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h2>
          <p>{post.content.substring(0, 100)}...</p> {}
        </div>
      ))}
    </div>
  );
}
