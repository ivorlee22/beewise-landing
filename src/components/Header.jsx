import './Header.css';

const Header = () => (
  <header className="header">
    <div className="container header__inner">
      <a href="#top" className="header__logo" aria-label="BeeWise, về đầu trang">
        <img
          src="/logo.PNG"
          alt=""
          className="header__logo-img"
          width="3500"
          height="3500"
        />
        <span className="header__logo-text" translate="no">BeeWise</span>
      </a>

      <nav className="header__nav" aria-label="Điều hướng chính">
        <a href="#ve-beewise" className="header__link">Về BeeWise</a>
        <a href="#ly-do" className="header__link">Lý do chia sẻ</a>
        <a href="#doi-tuong" className="header__link">Ai có thể tham gia?</a>
        <a href="#lien-he" className="header__link">Liên hệ</a>
        <a href="#dang-ky" className="header__cta">
          Tham gia chia sẻ
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
