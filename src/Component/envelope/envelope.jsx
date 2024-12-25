import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Envelope.css"; // Updated CSS

function Envelope() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const navigateToSecond = () => {
    navigate("/second");
  };

  const navigateToThird = () => {
    navigate("/third");
  };

  return (
    <div className="envelope-container">
      {/* Clickable image to navigate to second.jsx */}
      <img
        src="/Assets/tommy.jpg"
        alt="Top Decoration"
        className="top-image"
        onClick={navigateToSecond}
      />

      <div
        className={`envelope-wrapper ${isOpen ? "open" : ""}`}
        onClick={handleClick}
      >
        <div className="envelope">
          <div className="flap"></div>
          <div className="mail">
            <div className="text">
              <strong>Хайрт Урангүнж танаа</strong>
              <p>
                Сайнуу хайраа, энэ ямар байна даа кккк. Хайртай шүү💞
                <br /> Аль нэг дээр нь дараарай хөөрхнөө😘
              </p>
            </div>
          </div>
        </div>
      </div>

      <img
        src="/Assets/tommy.jpg"
        alt="Bottom Decoration"
        className="bottom-image"
        onClick={navigateToThird}
      />
    </div>
  );
}

export default Envelope;
