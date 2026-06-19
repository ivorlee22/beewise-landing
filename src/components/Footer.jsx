import "./Footer.css";

const projectDetails = [
  { label: "Nhóm thực hiện", value: "BeeWise" },
  { label: "Dự án", value: "Cộng đồng gia sư" },
  { label: "Người phụ trách", value: "Nguyễn Thị Tuyết Hương" },
];

const contactChannels = [
  {
    label: "Email",
    value: "huongntt1221@gmail.com",
    href: "mailto:huongntt1221@gmail.com",
  },
  {
    label: "Zalo/Số điện thoại",
    value: "0799 670 750",
    href: "tel:+84799670750",
  },
  {
    label: "Facebook/Fanpage",
    value: "facebook.com/kaoriismee",
    href: "https://www.facebook.com/kaoriismee",
    external: true,
  },
];

const Footer = () => (
  <footer className="footer" id="lien-he" aria-labelledby="contact-title">
    <div className="container footer__contact">
      <div className="footer__heading">
        <p className="footer__kicker">Kết nối với BeeWise</p>
        <h2 id="contact-title">Thông tin liên hệ</h2>
        <p>
          Bạn có câu hỏi về buổi phỏng vấn hoặc muốn chia sẻ thêm? Hãy liên hệ
          qua kênh thuận tiện nhất với bạn.
        </p>
      </div>

      <div className="footer__information">
        <dl className="footer__details footer__details--project">
          {projectDetails.map((detail) => (
            <div key={detail.label}>
              <dt>{detail.label}</dt>
              <dd>{detail.value}</dd>
            </div>
          ))}
        </dl>

        <dl className="footer__details footer__details--channels">
          {contactChannels.map((channel) => (
            <div key={channel.label}>
              <dt>{channel.label}</dt>
              <dd>
                <a
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noreferrer" : undefined}
                >
                  {channel.value}
                  <span aria-hidden="true">↗</span>
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>

    <div className="container footer__bottom">
      <div className="footer__brand">
        <img
          src="/logo.PNG"
          alt=""
          className="footer__logo"
          width="3500"
          height="3500"
          loading="lazy"
        />
        <div>
          <strong translate="no">BeeWise</strong>
          <span translate="no">Find Your Tutor, Fuel Your Future</span>
        </div>
      </div>
      <p className="footer__copyright">
        © {new Date().getFullYear()} BeeWise. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
