import React, { useState } from "react";
import menuAPI from "./menuAPI";
import "./style.css";

function Menu() {
  const [images] = useState(menuAPI); //Storing data in images using useState

  return (
    <div className="container">
      {/* using map method to loop over all images */}
      {images.map((image, index) => (
        <div className="img" key={index}>
          <img className="image" src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
}

export default Menu;
