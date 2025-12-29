import React from "react";




const Button = ({ label, variant = "primary", onClick }) => {
    return (
      <button
        className={`btn btn-${variant}`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  };
  
  export default Button;
  