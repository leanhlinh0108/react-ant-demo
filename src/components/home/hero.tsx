import { Button, Carousel } from "antd";


const items = [
  {
    key: "1",
    title: "Dan Studio",
    content: " lorem ipsum dolor sit amet lore mauris",
  },
  {
    key: "2",
    title: "Dan Studio",
    content: " lorem ipsum dolor sit amet lore mauris",
  },
  {
    key: "3",
    title: "Dan Studio",
    content: " lorem ipsum dolor sit amet lore mauris",
  },
  {
    key: "4",
    title: "Dan Studio",
    content: " lorem ipsum dolor sit amet lore mauris",
  },
];

function AppHero() {
  return (
    <div className="heroBlock">
      <Carousel autoplay>
        {items.map((item) => {
          return (
            <div className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">
                    Learn more
                  </Button>
                  <Button size="large">
                    <i className="fa-brands fa-github"></i> GitHub Repo
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
export default AppHero;
