import Envelope from "../envelope/envelope";

const First = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/Assets/paper.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "150px",
          color: "white",
          textAlign: "center",
        }}
      >
        Хүүе👀 Би илүү хөөрхөншдээ
        <br /> над дээр дараарай🥰
      </div>
      <Envelope />
      <div
        style={{
          position: "absolute",
          top: "600px",
          left: "180px",
          color: "white",
          textAlign: "center",
        }}
      >
        Заа хэн ч харсан би
        <br /> хөөрхөн байгааздээ, <br />
        Гүнжэээ🥰
      </div>
    </div>
  );
};

export default First;
