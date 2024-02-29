import { Menu } from "antd";

function HeaderComponent() {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="demo-logo">
          <img
            className="logo-header"
            src="https://dansolutions.vn/wp-content/uploads/2023/04/logo-vertical-inverted.png"
            alt=""
          />
          <a href="/">Dan Studio</a>
        </div>
        <Menu mode="horizontal" style={{ flex: 1, minWidth: 0 }}>
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
          <Menu.Item key="feature">Feature</Menu.Item>
          <Menu.Item key="howitwork">How It Work</Menu.Item>
          <Menu.Item key="faq">FAQ</Menu.Item>
          <Menu.Item key="pricing">Pricing</Menu.Item>
          <Menu.Item key="contact">Contact</Menu.Item>
        </Menu>
      </div>
    </div>
  );
}
export default HeaderComponent;
