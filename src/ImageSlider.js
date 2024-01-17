/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { images } from "./images";

const ImageSlider = () => {
  const [imgIndex, setIndex] = useState(0);
  const handlePrevious = () => {
    imgIndex === 0 ? setIndex(images.length - 1) : setIndex(imgIndex - 1);
  };
  const handleNext = () => {
    imgIndex === images.length - 1 ? setIndex(0) : setIndex(imgIndex + 1);
  };
  useEffect(()=>{
    const timer=setTimeout(()=>handleNext(),3000);
    return ()=>clearTimeout(timer);
  },[imgIndex]);
  return (
    <div className="flex justify-center h-[100vh] items-center">
      <button
        className="font-bold border-solid border-2 p-4 m-10 border-slate-300 hover:bg-slate-300 rounded-lg"
        onClick={handlePrevious}
      >
        Previous
      </button>
      {images.map(
        (image, index) =>
          index === imgIndex && (
            <img
              key={image}
              src={image}
              className="w-[500px] h-[300px] rounded-lg"
            />
          )
      )}
      <button
        className="font-bold border-solid border-2 p-4 m-10 border-slate-300 hover:bg-slate-300 rounded-lg"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
