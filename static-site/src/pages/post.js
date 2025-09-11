import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../posts/posts.json";
import "../index.css";

export default function Post() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  return (
    <div className="container">
      <h1 className="post-title">{post.title}</h1>
      <p className="post-content">{post.content}</p>
      <Link to="/" className="back-link">
        ← Back
      </Link>
    </div>
  );
}
