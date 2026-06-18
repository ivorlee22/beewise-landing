import './Features.css';

const FORM_URL = 'https://forms.gle/7LbAnWamxYbFEf598';

const tutorChallenges = [
  'Có bạn loay hoay khi tìm lớp đúng với thế\u00A0mạnh.',
  'Có bạn chưa biết cách tạo ấn tượng ban\u00A0đầu với phụ\u00A0huynh.',
  'Có bạn từng mất thời gian vì thông tin lớp\u00A0học chưa rõ ràng.',
  'Có bạn có kinh nghiệm tốt nhưng chưa có nơi phù hợp để thể hiện năng\u00A0lực của mình.',
];

const tutorGroups = [
  {
    number: '01',
    title: 'Gia sư đang hoặc đã từng đi dạy',
    description:
      'Bạn đang dạy online/offline, đang có lớp hiện tại, hoặc từng nhận lớp qua người quen, Facebook, trung tâm hay các nền tảng online.',
  },
  {
    number: '02',
    title: 'Sinh viên đang dạy thêm hoặc muốn bắt đầu làm gia sư',
    description:
      'Bạn là sinh viên đang dạy thêm để kiếm thêm thu nhập, rèn kỹ năng giao tiếp, kỹ năng giảng dạy, hoặc muốn thử sức với công việc gia sư trong thời gian tới.',
  },
  {
    number: '03',
    title: 'Sinh viên sư phạm, giáo viên hoặc người có nền tảng giảng dạy',
    description:
      'Bạn là sinh viên sư phạm, giáo viên đang có lớp dạy bên ngoài, hoặc người có chuyên môn tốt và mong muốn phát triển công việc gia sư nghiêm túc hơn.',
  },
  {
    number: '04',
    title: 'Gia sư dạy chứng chỉ hoặc luyện thi',
    description:
      'Bạn đang dạy IELTS, TOEIC, ngoại ngữ, các chứng chỉ khác, hoặc ôn thi chuyên, học sinh giỏi, THPTQG và các lớp học cần lộ trình rõ ràng.',
  },
];

const Features = () => (
  <>
    <section className="stories section" id="ly-do" aria-labelledby="stories-title">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title" id="stories-title">
            Vì sao BeeWise rất cần những chia sẻ trải&nbsp;nghiệm của bạn?
          </h2>
          <p className="section-lead">
            Gia sư không chỉ đơn giản là tìm một lớp để dạy, mà còn là làm sao
            để xây dựng niềm tin, tìm sự phù hợp và vượt qua những khó khăn để
            kết nối với phụ&nbsp;huynh, học&nbsp;sinh.
          </p>
        </div>

        <div className="stories__layout">
          <ul className="stories__list">
            {tutorChallenges.map((challenge, index) => (
              <li key={challenge}>
                <span className="stories__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>

          <aside className="stories__closing" aria-label="Mục tiêu của BeeWise">
            <span className="stories__closing-label">Điều BeeWise muốn hiểu</span>
            <p>
              BeeWise mong được nghe những câu chuyện thật từ các bạn, để hiểu rõ
              hơn nhu cầu của gia sư và từng bước xây dựng một cộng đồng minh
              bạch, đáng tin cậy hơn.
            </p>
          </aside>
        </div>
      </div>
    </section>

    <section className="audience section" id="doi-tuong" aria-labelledby="audience-title">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title" id="audience-title">
            Gia sư nào có thể tham gia phỏng vấn cùng&nbsp;BeeWise?
          </h2>
          <p className="section-lead">
            Dù bạn đã có nhiều kinh nghiệm hay chỉ mới bắt đầu, góc nhìn của bạn
            đều có giá trị với BeeWise.
          </p>
        </div>

        <div className="audience__grid">
          {tutorGroups.map((group) => (
            <article className="audience__card" key={group.number}>
              <div className="audience__card-top">
                <span className="audience__number" aria-hidden="true">
                  {group.number}
                </span>
                <span className="audience__group-label">Nhóm gia sư</span>
              </div>
              <div className="audience__card-content">
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="audience__note">
          Chỉ cần bạn có trải nghiệm, câu chuyện hoặc góc nhìn liên quan đến hành
          trình làm gia sư, BeeWise rất vui được lắng nghe.
        </p>
      </div>
    </section>

    <section className="signup section" id="dang-ky" aria-labelledby="signup-title">
      <div className="container">
        <div className="signup__card">
          <div className="signup__content">
            <p className="eyebrow signup__eyebrow">Đăng ký tham gia phỏng vấn</p>
            <h2 className="signup__title" id="signup-title">
              Bạn sẵn sàng chia sẻ câu chuyện làm gia&nbsp;sư của mình chứ?
            </h2>
            <p>
              Hãy nhấn nút tham gia bên dưới để BeeWise có thể hiểu hơn về trải
              nghiệm của bạn và sắp xếp một buổi trò&nbsp;chuyện nhỏ vào thời gian
              phù hợp nhất.
            </p>
            <p>
              Sau khi nhận được thông tin, tụi mình sẽ liên hệ lại để xác nhận
              lịch hẹn nha!
            </p>
            <a
              href={FORM_URL}
              className="button button--primary signup__button"
              target="_blank"
              rel="noreferrer"
            >
              Tham gia cùng chúng mình nha!
            </a>
          </div>

          <img
            src="/stickers/2.png"
            alt=""
            className="signup__image"
            width="2048"
            height="2048"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section className="thanks section" aria-labelledby="thanks-title">
      <div className="container thanks__inner">
        <h2 className="section-title" id="thanks-title">
          Lời cảm ơn chân thành nhất
        </h2>
        <p>BeeWise rất trân trọng thời gian và những chia sẻ của bạn.</p>
        <p>
          Dù hiện tại tụi mình chưa có phần quà thật lớn, nhưng mỗi câu chuyện,
          mỗi góc nhìn và mỗi trải nghiệm bạn mang đến đều là một “món quà” rất
          ý nghĩa với BeeWise.
        </p>
        <p>
          Cảm ơn bạn vì đã đồng hành cùng tụi mình trong những bước đầu xây dựng
          cộng đồng gia sư. BeeWise thật sự biết ơn vì có bạn trong hành trình này!
        </p>
      </div>
    </section>
  </>
);

export default Features;
