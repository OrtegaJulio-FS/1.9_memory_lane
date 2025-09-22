import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../posts/posts.json";
import "../index.css";
import practiceApiImg from "../images/practice-api.png";
import reactImg from "../images/react-image.jpeg";

export default function Post() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));
  const imageMap = {
    "practice-api.png": practiceApiImg,
    "react-image.jpeg": reactImg,
  };

  return (
    <div className="container">
      <h1 className="post-title">{post.title}</h1>
      <img src={imageMap[post.image]} alt={post.title} className="post-image" />
      <p className="post-content">{post.content}</p>

      <Link to="/" className="back-link">
        ← Back
      </Link>
    </div>
  );
}
