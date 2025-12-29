import React from "react";
import "./postCard.css";



const PostCard = ({ question, answer, author }) => {
  return (
    <div className="post-card bg-white p-3 rounded border mb-3">
      <h6 className="fw-bold">{question}</h6>

      <p className="text-muted small mb-2">
        Answered by <span className="fw-medium">{author}</span>
      </p>

      <p className="post-answer">
        {answer}
      </p>

      <div className="d-flex gap-3 text-muted small">
        <button className="btn btn-light btn-sm">Upvote</button>
        <button className="btn btn-light btn-sm">Comment</button>
        <button className="btn btn-light btn-sm">Share</button>
      </div>
    </div>
  );
};

export default PostCard;
