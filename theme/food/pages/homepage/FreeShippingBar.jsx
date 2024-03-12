import React from "react";
import "./FreeShippingBar.scss";

function FreeShippingBar() {
  return (
    <div className="df">
    <div className="page-width">
      <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x border-divider border my-3">
       
        <div className="p-2 border-divider">
          <h2>Daily Special</h2>
          <p>Get special food menu and offers.</p>
        </div>
        <div className="p-2 border-divider">
          <h2>Best Price</h2>
          <p>We offer the best prices on all our items.</p>
        </div>
        <div className="p-2 border-divider">
          <h2>Great Service</h2>
          <p>Our customer service is available .</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default FreeShippingBar;

export const layout = {
  areaId: "content",
  sortOrder: 2
};
