import { useNavigate } from "react-router-dom";

const Second = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/fourth"); // Navigate to the Fourth page
  };

  return (
    <div
      style={{
        backgroundImage: `url("/Assets/us.jpg")`, // Background image
        backgroundSize: "cover", // Ensures the background covers the container
        backgroundPosition: "center", // Centers the image
        height: "100vh", // Full viewport height
        display: "flex", // Flexbox for centering
        flexDirection: "column", // Stack content vertically
        justifyContent: "space-between", // Align top and bottom images
        alignItems: "center", // Center horizontally
        margin: 0, // Remove margin
        padding: 0, // Remove padding
        position: "relative", // To position clickable divs
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "130px",
          color: "white",
          textAlign: "center",
        }}
      >
        Чамтайгаа л хамт байвал би энэ дэлхийн хаана ч байсан гэсэн хамгийн аз
        жаргалтай🥰
      </div>
      {/* Top Image */}
      <img
        src="/Assets/space.jpg" // Path to top image
        alt="Top Decoration"
        style={{
          width: "100%", // Full width
          height: "22vh", // Adjust height to fit design
          objectFit: "cover", // Maintain aspect ratio
        }}
      />

      {/* Content in the middle */}
      <div
        style={{
          position: "absolute",
          top: "630px",
          color: "white",
          textAlign: "center",
        }}
      >
        Зааза хонгор Гүнжээхэн минь миний хамар дээр дараарай
        <br />
        🐽
      </div>

      {/* Invisible Clickable Div */}
      <div
        onClick={handleClick}
        style={{
          position: "absolute",
          top: "336px", // Position relative to the middle content
          left: "92%", // Center horizontally
          transform: "translateX(-50%)", // Adjust alignment
          width: "200px", // Width of the clickable area
          height: "50px", // Height of the clickable area
          cursor: "pointer",
          backgroundColor: "transparent", // Make the div invisible
        }}
      ></div>

      {/* Bottom Image */}
      <img
        src="/Assets/ocean.jpg" // Path to bottom image
        alt="Bottom Decoration"
        style={{
          width: "100%", // Full width
          height: "35vh", // Adjust height to fit design
          objectFit: "cover", // Maintain aspect ratio
        }}
      />
    </div>
  );
};

export default Second;
