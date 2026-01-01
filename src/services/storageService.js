/*
  storageService
  ----------------
  Single abstraction layer for localStorage.
  - Safe JSON parsing
  - Default fallback data
  - No component touches localStorage directly
*/

const storageService = {
    get(key, fallback) {
      try {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : fallback;
      } catch (error) {
        console.error(`Storage GET error for ${key}`, error);
        return fallback;
      }
    },
  
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Storage SET error for ${key}`, error);
      }
    },
  
    remove(key) {
      localStorage.removeItem(key);
    }
  };
  
  export default storageService;
  