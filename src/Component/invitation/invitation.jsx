import "./Invitation.css"; // External CSS for styling

const Invitation = () => {
  return (
    <div className="invitation-container">
      <div className="invitation-content">
        <h2>Хайрт Урангүнж танаа!</h2>
        <p>
          Хамтдаа нэгэн оройг онцгой байлгахыг хүсээд өөрсдөдөө зориулж нэгэн
          үдшийг төлөвлөлөө. Энэ бол бидний хамтдаа шинэ, сайхан дурсамж бүтээх
          үдэш байх болно. Тиймээс таныг албан ёсоор болзоонд урьж байна.
        </p>
        <p className="info">
          <strong>Огноо:</strong> 2024 оны 12-р сарын 26 <br />
          <strong>Цаг:</strong> 19:00 <br />
          <strong>Байршил:</strong> Таныг очиж авах болохоор бэлэн болоод хүлээж
          байна уу❤️
        </p>
        <p className="jich">
          <strong>Жич:</strong>
          <br />
          Өөрийгөө хамгийн гайхалтайгаар мэдрэхэд туслах хувцсаа өмсөөрэй, учир
          нь чи миний нүдэнд үргэлж төгс харагддаг.
        </p>
        <div className="modo">
          <p>Зөвхөн чиний,</p>
          <p>
            <strong>[Мөнхдөлгөөн]</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
