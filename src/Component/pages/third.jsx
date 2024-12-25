import { useNavigate } from "react-router-dom";

const Third = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/fourth"); // Navigate to the fourth page
  };

  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url("/Assets/logo.jpg")`, // Background image
        backgroundSize: "cover", // Ensures the background covers the container
        backgroundPosition: "center", // Centers the image
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
        display: "flex", // Flexbox for centering
        flexDirection: "column", // Stack content vertically
        justifyContent: "space-between", // Align elements to top and bottom
        alignItems: "center", // Center horizontally
        boxSizing: "border-box",
        overflow: "hidden", // Prevent overflow from any misaligned content
      }}
    >
      {/* Top Image with Text Overlay */}
      <div style={{ position: "relative", width: "100%" }}>
        <img
          src="/Assets/cloud.jpg"
          alt="Top Decoration"
          style={{
            width: "100%", // Full width
            height: "18vh", // Adjust height to fit your design
            objectFit: "cover", // Maintain aspect ratio
            margin: 0, // Remove default margin
          }}
        />
        <div
          style={{
            position: "absolute", // Overlay text on the image
            bottom: "50px",
            color: "#fff", // White text
            textShadow: "0px 4px 8px rgba(0, 0, 0, 0.7)", // Text shadow for readability
            textAlign: "center", // Center-align text
          }}
        >
          <h1 style={{ fontSize: "1.5rem", margin: 0 }}>
            Энэ цэцгийг чамд bby, хэрвээ авах бол цэцгэн дээр дараарай🌹
          </h1>
        </div>

        {/* Invisible Clickable Div */}
        <div
          onClick={handleClick}
          style={{
            position: "absolute",
            top: "300px",
            left: "60%", // Adjust the position of the clickable area
            width: "100px", // Width of the clickable area
            height: "100px", // Height of the clickable area
            cursor: "pointer",
            backgroundColor: "transparent", // Invisible to the user
          }}
        ></div>
      </div>

      {/* Bottom Image */}
      <img
        src="/Assets/beach.jpg"
        alt="Bottom Decoration"
        style={{
          width: "100%", // Full width
          height: "10vh", // Adjust height to fit your design
          objectFit: "cover", // Maintain aspect ratio
          margin: 0, // Remove default margin
        }}
      />
    </div>
  );
};

export default Third;
