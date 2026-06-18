import './Hero.css';

const FORM_URL = 'https://forms.gle/7LbAnWamxYbFEf598';

const Hero = () => (
  <section className="hero" id="top" aria-labelledby="hero-title">
    <div className="hero__decoration" aria-hidden="true">
      <span className="hero__honeycomb hero__honeycomb--one" />
      <span className="hero__honeycomb hero__honeycomb--two" />
    </div>

    <div className="container hero__grid">
      <div className="hero__content">
        <p className="hero__eyebrow">Chia sẻ trải nghiệm gia sư cùng BeeWise</p>
        <h1 className="hero__title" id="hero-title">
          Bạn đã từng đi tìm lớp, nhận lớp hoặc dạy kèm cho học sinh?
        </h1>
        <p className="hero__lead">
          BeeWise muốn mời bạn tham gia một buổi trò chuyện nho nhỏ để chia sẻ
          những trải nghiệm thật trên hành trình làm gia sư của mình.
        </p>
        <p className="hero__body">
          Bạn không cần chuẩn bị gì nhiều đâu nè. BeeWise chỉ mong được lắng nghe
          những câu chuyện thực tế, những khó khăn bạn từng gặp và những điều bạn
          mong muốn được cải thiện, để chúng mình có thể cùng nhau xây dựng một
          cộng đồng gia sư uy tín, an toàn và được bảo vệ quyền lợi tốt hơn.
        </p>
        <a
          href={FORM_URL}
          className="button button--primary hero__cta"
          target="_blank"
          rel="noreferrer"
        >
          Mình muốn chia sẻ cùng BeeWise
        </a>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <div className="hero__visual-card">
          <img
            src="/stickers/1.png"
            alt=""
            className="hero__mascot"
            width="2048"
            height="2048"
            fetchPriority="high"
          />
          <span className="hero__quote">Mỗi câu chuyện đều đáng được lắng nghe.</span>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
