import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import storageService from '../services/storageService';
import dummyPosts from '../data/dummyPosts';

/*
  FeedContext manages app content like:
  - posts 
  - spaces
  - notifications
*/
const FeedContext = createContext();

export const FeedProvider = ({ children }) => {
  // Mock posts data
  const [posts, setPosts] = useState(() =>
    storageService.get("posts", dummyPosts)
  ); 

  useEffect(() => {
    storageService.set("posts", posts)
  }, [posts]);

  // Mock spaces data
  const [spaces, setSpaces] = useState([]);

  // Mock notifications data
  const [notifications, setNotifications] = useState([]);

  // Add new post (immutable update)
  const addPost = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  // Delete post by id
  const deletePost = (postId) => {
    setPosts((prev) => prev.filter((post) => post.id !== postId));
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
        setPosts,
        spaces,
        notifications,
        addPost,
        deletePost,
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
