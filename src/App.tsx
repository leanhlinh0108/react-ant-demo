import { Layout, theme } from "antd";
import "./App.css";
import HeaderComponent from "./components/common/header";
import AppHome from "./components/views/home";

const { Header, Content } = Layout;

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="mainLayout">
      <Header
        style={{ display: "flex", alignItems: "center", background: "#263246" }}
      >
        <HeaderComponent />
      </Header>
      <Content>
        <AppHome></AppHome>
      </Content>
    </Layout>
  );
}

export default App;
