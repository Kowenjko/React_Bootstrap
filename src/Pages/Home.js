import React, { Component } from "react";
import { Button, Card, CardDeck, CardImg, Container } from "react-bootstrap";
import CaruselBox from "../Components/CaruselBox";
import blog_2 from "../assets/blog_2.jpg";
import blog_4 from "../assets/blog_4.jpg";
import blog_5 from "../assets/blog_5.jpg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <CaruselBox />
        <Container>
          <h2 className="text-center m-4">Отзывы</h2>
          <CardDeck className="m-4">
            <Card style={{ borderRadius: "20px" }}>
              <CardImg
                variant="top"
                style={{
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                }}
                src={blog_2}
              />
              <Card.Body>
                <Card.Title>Qwetys</Card.Title>
                <Card.Text>
                  Как-то, одним прекрасным утром, я наткнулся на новость о публичном доступе Шиндовс 10 от компании Мелкософт. Я, первоначально, был очень удивлён выходом 10-го после 8-го, но не в этом суть, сразу же его скачал и...
                </Card.Text>
                <Button variant="primary">Подробно</Button>
              </Card.Body>
            </Card>
            <Card style={{ borderRadius: "20px" }}>
              <Card.Body>
                <Card.Title>Lengushi</Card.Title>
                <Card.Text>
                  Очень агрессивная политика конфиденциальности; Невозможность отказаться от установки обновлений; Неразбериха в дизайне нативных приложений; Банальная "сырость" приложений по умолчанию.
                </Card.Text>
                <Button variant="primary">Подробно</Button>
              </Card.Body>
              <CardImg
                variant="bottom"
                style={{
                  borderBottomLeftRadius: "20px",
                  borderBottomRightRadius: "20px",
                }}
                src={blog_5}
              />
            </Card>
            <Card style={{ borderRadius: "20px" }}>
              <CardImg
                variant="top"
                style={{
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                }}
                src={blog_4}
              />
              <Card.Body>
                <Card.Title>zhuk235653</Card.Title>
                <Card.Text>
                  Полгода назад установил Windows 10 из любопытства. На удивление, я не был разочарован ни капли. Производительность отличная, никаких капризов - та же Windows 8 но с частичкой XP и Linux. Но в итоге, когда в...
                </Card.Text>
                <Button variant="primary">Подробно</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </div>
    );
  }
}
