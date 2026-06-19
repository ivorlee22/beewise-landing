import "./About.css";

const aboutStickers = [
  { src: "/stickers/4.png", className: "about__sticker about__sticker--one" },
  { src: "/stickers/8.png", className: "about__sticker about__sticker--two" },
  { src: "/stickers/10.png", className: "about__sticker about__sticker--three" },
  { src: "/stickers/6.png", className: "about__sticker about__sticker--four" },
  { src: "/stickers/11.png", className: "about__sticker about__sticker--five" },
];

const teamMembers = [
  {
    role: "Giám đốc điều hành (CEO)",
    name: "Nguyễn Thị Tuyết Hương",
    image: "/team/member-1.png",
    description:
      "Dẫn dắt tầm nhìn của công ty, định hướng chiến lược và đưa ra các quyết định điều hành tổng thể.",
  },
  {
    role: "Giám đốc tài chính (CFO)",
    name: "Đỗ Nhất Huy",
    image: "/team/member-2.png",
    description:
      "Phụ trách quản trị tài chính, ngân sách, doanh thu, chi phí và chiến lược gọi vốn.",
  },
  {
    role: "Giám đốc marketing (CMO)",
    name: "Trần Phi Yến",
    image: "/team/member-3.png",
    description:
      "Phụ trách marketing, truyền thông, xây dựng thương hiệu và phát triển người dùng.",
  },
  {
    role: "Giám đốc vận hành (COO)",
    name: "Ngô Chí Vỹ",
    image: "/team/member-4.png",
    description:
      "Quản lý hoạt động vận hành, bao gồm quy trình, quản lý gia sư và kiểm soát chất lượng dịch vụ.",
  },
  {
    role: "Giám đốc công nghệ (CTO)",
    name: "Nguyễn Minh Huân",
    image: "/team/member-5.png",
    description:
      "Dẫn dắt chiến lược công nghệ, bao gồm kiến trúc hệ thống, phát triển nền tảng, bảo mật, AI, cơ sở dữ liệu và đội ngũ kỹ thuật.",
  },
  {
    role: "Giám đốc sản phẩm (CPO)",
    name: "Huỳnh Thiện Nhân",
    image: "/team/member-6.png",
    description:
      "Phụ trách chiến lược sản phẩm, tính năng, UX/UI và thấu hiểu nhu cầu của khách hàng.",
  },
];

const About = () => (
  <section
    className="about section"
    id="ve-beewise"
    aria-labelledby="about-title"
  >
    <div className="about__stickers" aria-hidden="true">
      {aboutStickers.map((sticker) => (
        <img
          key={sticker.src}
          src={sticker.src}
          alt=""
          className={sticker.className}
          width="2048"
          height="2048"
          loading="lazy"
        />
      ))}
    </div>

    <div className="container about__grid">
      <div className="about__visual">
        <div className="about__image-frame">
          <img
            src="/team/team.png"
            alt="Đội ngũ BeeWise cùng xây dựng cộng đồng gia sư"
            className="about__image"
            width="5328"
            height="4000"
            loading="lazy"
          />
        </div>
      </div>

      <div className="about__content">
        <p className="eyebrow">Xin chào, chúng mình là BeeWise</p>
        <h2 className="section-title" id="about-title">
          Cùng xây dựng một không gian tốt hơn cho hành trình làm{" "}
          <span className="keep-together">gia sư</span>
        </h2>
        <p className="about__slogan" translate="no">
          Find Your Tutor, Fuel Your Future!
        </p>
        <p>
          BeeWise được phát triển bởi nhóm sinh viên với mong muốn giải quyết
          những vấn đề thực tế trong quá trình đồng hành giữa{" "}
          <span className="keep-together">gia sư</span>, phụ huynh và{" "}
          <span className="keep-together">học sinh</span>.
        </p>
        <p>
          Tụi mình mong muốn xây dựng một không gian nơi{" "}
          <span className="keep-together">gia sư</span> có thể tìm được lớp phù
          hợp, thể hiện năng lực của bản thân và được hỗ trợ tốt hơn trên hành
          trình giảng dạy.
        </p>
      </div>
    </div>

    <div className="container team">
      <div className="team__heading">
        <h3>Đội ngũ đồng hành cùng BeeWise</h3>
        <p>
          Mỗi thành viên phụ trách một mảng cốt lõi để BeeWise phát triển bền
          vững, minh bạch và gần hơn với nhu cầu thật của gia sư.
        </p>
      </div>

      <div className="team__grid">
        {teamMembers.map((member) => (
          <article className="team__card" key={member.role}>
            <img
              src={member.image}
              alt={`Chân dung ${member.name}, ${member.role}`}
              className="team__photo"
              width="1536"
              height="1536"
              loading="lazy"
            />
            <div className="team__content">
              <p className="team__role">{member.role}</p>
              <h4>{member.name}</h4>
              <p>{member.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default About;