import React from "react";
import "./askBox.css";



const AskBox = () => {
  return (
    <div className="ask-box bg-white p-3 border rounded mb-3">
      <input
        type="text"
        className="form-control mb-2"
        placeholder="What do you want to ask or share?"
        aria-label="Ask question input"
      />

      <div className="d-flex justify-content-between">
        <div className="text-muted small">
          Ask • Answer • Post
        </div>
        <button className="btn btn-danger btn-sm">Post</button>
      </div>
    </div>
  );
};

export default AskBox;
