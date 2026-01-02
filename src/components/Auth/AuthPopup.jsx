import React from "react";
import { useAuth } from "../context/AuthContext";

/*
  AuthPopup
  ----------
  Shown when user tries to perform an auth-required action.
  This is a soft UX guard (not a redirect).
*/
const AuthPopup = () => {
  const { showAuthPopup, setShowAuthPopup } = useAuth();

  // If popup is not needed, render nothing
  if (!showAuthPopup) return null;

  return (
    <div className="auth-popup-overlay">
      <div className="auth-popup bg-white p-4 rounded shadow">
        <h6 className="fw-bold mb-2">Login required</h6>

        <p className="text-muted small mb-3">
          Please log in to continue this action.
        </p>

        <div className="d-flex justify-content-end gap-2">
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => setShowAuthPopup(false)}
          >
            Cancel
          </button>

          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              setShowAuthPopup(false);
              // Later: navigate to login page if needed
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPopup;
