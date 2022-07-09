import React from "react";
import "./Loader.css";

function Loader({ isLoading }) {
  if (!isLoading) return null;

  return (
    <div className="loader">
      <img src="loader.svg" alt="Loading" />
    </div>
  );
}

export default Loader;
