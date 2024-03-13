import React from "react";
import "./logo.scss";

function Logo() {
  return (
    <div className="logo-pos">
      <a href="/">
        <img src="/eve.png" alt="eve" />
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 5
};
