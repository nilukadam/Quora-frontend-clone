import React from 'react'
import { createContext, useContext, useState } from "react";

/*
  FeedContext manages app content like:
  - posts
  - spaces
  - notifications
*/
const FeedContext = createContext();

export const FeedProvider = ({ children }) => {
  // Mock posts data
  const [posts, setPosts] = useState([]);

  // Mock spaces data
  const [spaces, setSpaces] = useState([]);

  // Mock notifications data
  const [notifications, setNotifications] = useState([]);

  // Add new post (immutable update)
  const addPost = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  // Mark notification as read
  const markNotificationRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, isRead: true } : n
      )
    );
  };

  return (
    <FeedContext.Provider
      value={{
        posts,
        spaces,
        notifications,
        addPost,
        markNotificationRead,
      }}
    >
      {children}
    </FeedContext.Provider>
  );
};

/*
  Custom hook for FeedContext
*/
export const useFeed = () => useContext(FeedContext);
