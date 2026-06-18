import './About.css';

const About = () => (
  <section className="about section" id="ve-beewise" aria-labelledby="about-title">
    <div className="container about__grid">
      <div className="about__visual">
        <div className="about__image-frame">
          <img
            src="/stickers/3.png"
            alt="Chú ong BeeWise cầm cỏ bốn lá"
            className="about__image"
            width="2048"
            height="2048"
            loading="lazy"
          />
        </div>
      </div>

      <div className="about__content">
        <p className="eyebrow">Xin chào, chúng mình là BeeWise</p>
        <h2 className="section-title" id="about-title">
          Cùng xây dựng một không gian tốt hơn cho hành trình làm gia sư
        </h2>
        <p className="about__slogan" translate="no">
          Find Your Tutor, Fuel Your Future!
        </p>
        <p>
          BeeWise được phát triển bởi nhóm sinh viên với mong muốn giải quyết
          những vấn đề thực tế trong quá trình đồng hành giữa gia sư và phụ
          huynh/học sinh.
        </p>
        <p>
          Tụi mình mong muốn xây dựng một không gian nơi gia sư có thể tìm được
          lớp phù hợp, thể hiện năng lực của bản thân và được hỗ trợ tốt hơn
          trên hành trình giảng dạy.
        </p>
      </div>
    </div>
  </section>
);

export default About;
