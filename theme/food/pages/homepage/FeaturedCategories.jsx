import React from "react";

function FeaturedCategories() {
  return (
    <div className="bg">
    <div className="page-width">
      <div className="mb-2 mt-3">
        <h2 className="text-center">OUR CATEGORIES</h2>
      </div>
      <div className="page-width grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="relative col-span-1 row-span-3 men-cat">
          
          <img src="/men-banner.jpg" alt="Shop men" />

          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="#">
            <p>Chinese</p>
          </a>
        </div>
        <div className="relative col-span-1 row-span-2 women-cat">
          <img src="/women-banner.jpg" alt="Shop women" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="#">
            <p>North Indian</p>
          </a>
          <div style={{padding:"10px"}}><p> </p></div>
        </div>
      

        <div className="relative col-span-1 row-span-2 kid-cat">
          <img src="/burger.jpg" alt="Shop kids" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="#">
            <p>Fast Food</p>
          </a>
        
        </div>
        <div className="relative col-span-1 row-span-2 kid-cat">
          <img src="/briyani.jpg" alt="Shop Briyani" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="#">
            <p>Briyani</p>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default FeaturedCategories;

export const layout = {
  areaId: "content",
  sortOrder: 5
};
