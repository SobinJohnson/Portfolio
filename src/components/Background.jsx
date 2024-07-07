import React, { useEffect, useRef } from "react";
import "./Background.css"; // Assuming you have CSS for the blob

const BlobComponent = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;

      if (blobRef.current) {
        blobRef.current.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          {
            duration: 3000,
            fill: "forwards",
          }
        );
      }
    };

    window.addEventListener("pointermove", handlePointerMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
      <div id="blob" ref={blobRef}></div>
      <div id="blur"></div>
    </>
  );
};

export default BlobComponent;
