import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../posts/posts.json";

export default function Post() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}
