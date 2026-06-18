import "./Hero.css";

const FORM_URL = "https://forms.gle/7LbAnWamxYbFEf598";

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
          Bạn đã từng <span className="keep-together">đi tìm lớp</span>,{" "}
          <span className="keep-together">nhận lớp</span> hoặc{" "}
          <span className="keep-together">dạy kèm</span> cho{" "}
          <span className="keep-together">học sinh</span>?
        </h1>
        <p className="hero__lead">
          BeeWise muốn mời bạn tham gia một buổi trò chuyện{" "}
          <span className="keep-together">nho nhỏ</span> để chia sẻ những{" "}
          <span className="keep-together">trải nghiệm</span> thật trên hành
          trình làm <span className="keep-together">gia sư</span> của mình.
        </p>
        <p className="hero__body">
          Bạn không cần chuẩn bị gì nhiều đâu nè. BeeWise chỉ mong được lắng
          nghe những <span className="keep-together">câu chuyện</span> thực tế,
          những khó khăn bạn từng gặp và những điều bạn mong muốn được cải
          thiện, để chúng mình có thể cùng nhau xây dựng một cộng đồng gia sư uy
          tín, an toàn và được bảo vệ{" "}
          <span className="keep-together">quyền lợi</span> tốt hơn.
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
          <span className="hero__quote">
            Mỗi câu chuyện đều đáng được lắng nghe.
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
