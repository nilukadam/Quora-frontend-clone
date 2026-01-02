import React, {useState} from "react";
import "./postCard.css";
import { useAuth } from "../../context/AuthContext";
import { useFeed } from "../../context/FeedContext";



const PostCard = ({ question, answer, author }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isUpvoted, setIsUpvoted] = useState(false);
    const { requireAuth } = useAuth();
    const { deletePost } = useFeed();


  return (
    <div className="post-card bg-white p-3 rounded border mb-3">
      <h6 className="fw-bold">{question}</h6>

      <p className="text-muted small mb-2">
        Answered by <span className="fw-medium">{author}</span>
      </p>

      <p className={`post-answer ${!isExpanded ? "collapsed" : ""}`}>
        {answer}
      </p>
      {answer.length > 120 && (
        <button
           className="btn btn-link p-0 mb-2"
           onClick={() => setIsExpanded(!isExpanded)}
        >
         {isExpanded ? "Show less" : "Read more"}
       </button>
      )}


      <div className="d-flex gap-3 text-muted small">
        <button
          className={`btn btn-sm ${isUpvoted ? "btn-success" : "btn-light"}`}
          onClick={() => 
            requireAuth(() => setIsUpvoted(!isUpvoted))
          }
          aria-label="Upvote answer"
        >
          {isUpvoted ? "Upvoted" : "Upvote"}
        </button>

        <button className="btn btn-light btn-sm"
        onClick={() => requireAuth(() =>{
          // future: open comment box
        })}
        >
         Comment</button>

        <button className="btn btn-light btn-sm">Share</button>

        <button
          className="btn btn-light btn-sm text-danger"
          onClick={() =>
            requireAuth(() => {
              const confirmDelete = window.confirm(
                 "Are you sure you want to delete this post?"
              );
              if (confirmDelete) {
                 deletePost(question);
              }
            })
          }
       >
         Delete
      </button>

      </div>
    </div>
  );
};

export default PostCard;
 