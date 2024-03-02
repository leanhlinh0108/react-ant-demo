import { Col, Row } from "antd";
const items = [
  {
    key: "1",
    icon: <i className="fa-brands fa-uikit"></i>,
    title: "UI-UX Design",
    content:
      " Design solution that not only solves user needs but also matches with business goal & product concept.",
  },
  {
    key: "2",
    icon: <i className="fa-brands fa-aws"></i>,
    title: "Web Apps & Web Services",
    content:
      " Launch, operate & monitor product performance against business goal & gain insights for future improvement",
  },
  {
    key: "3",
    icon: <i className="fa-solid fa-mobile-screen-button"></i>,
    title: "iOS / Android Mobile Apps",
    content:
      " Deliver product built on suitable technical approach and satisfies product concept, feature & design.",
  },
];
export default function AppAbout() {
  return (
    <div className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
          <p>Your Trusted Digital Product Partner</p>
        </div>
        <div className="contentHolder">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            laboriosam eaque quidem qui quia placeat omnis cupiditate culpa
            atque tempora. Corporis in commodi aspernatur id temporibus illo
            aperiam cumque quibusdam.
          </p>
          <Row gutter={[16, 16]}>
            {items.map((item) => {
              return (
                <Col span={8} key={item.key}>
                  <div className="content">
                    <div className="icon">{item.icon}</div>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}
