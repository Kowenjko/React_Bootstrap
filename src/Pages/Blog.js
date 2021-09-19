import React, { Component } from "react";
import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Media,
  Row,
} from "react-bootstrap";
import blog_1 from "../assets/blog_1.jpg";
import blog_2 from "../assets/blog_2.jpg";
import blog_3 from "../assets/blog_3.png";


export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src={blog_1}
              />
              <Media.Body>
                <h5>Сатья Наделла и Фил Спенсер – о будущем игр и их значении для Microsoft</h5>
                <p>
                  В преддверии первого в своём роде мероприятия  Xbox & Bethesda Showcase, которое пройдет в воскресенье, глава Xbox Фил Спенсер провел серию бесед о будущем игр с генеральным директором Microsoft Сатьей Наделлой и членами команды Gaming Сатья Наделла: Игры с самого начала…<a href='https://blogs.windows.com/russia/2021/06/10/satya-nadella-phil-spencer-gaming-microsoft/' class={{ color: 'blue' }}> Read more</a>
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src={blog_3}
              />
              <Media.Body>
                <h5>Гибридный офис — формат работы, к которому придут все</h5>
                <p>
                  Наши партнеры из компании Jabra поделились своим видением гибридного формата работы и дали прогноз на будущее. 2020 год изменил многое для организаций и их сотрудников. Миллионы компаний столкнулись с новой реальностью: чтобы бизнес продолжал работать и приносить доход, нужно в… <a href='https://blogs.windows.com/russia/2021/04/27/hybrid-office/' class={{ color: 'blue' }}> Read more</a>
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src={blog_2}
              />
              <Media.Body>
                <h5>Представляем очередное обновление Windows 10 версии 21H1</h5>
                <p>
                  Автор – Джон Кейбл, вице-президент, Program Management, Windows Servicing and Delivery Мы представляем очередное обновление компонентов Windows 10 версии Сейчас Windows чаще чем когда-либо используется для работы, учебы и развлечений, поэтому мы понимаем, как важно обеспечить максимальную эффективность процесса обновления,…<a href='https://blogs.windows.com/russia/2021/02/18/windows-10-21h1/' class={{ color: 'blue' }}> Read more</a>
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col md="3">
            <h5 className="mt-3 text-center">Семейства Windows</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroupItem>Windows NT</ListGroupItem>
                <ListGroupItem>Windows Embedded</ListGroupItem>
                <ListGroupItem>Windows 10 IoT</ListGroupItem>
                <ListGroupItem>Windows Mobile</ListGroupItem>
              </ListGroup>
            </Card>
            <Card className="mt-3" bg="dark">
              <Card.Body>
                <Card.Title>Редакции Windows 10</Card.Title>
                <Card.Text>
                  Home,
                  Home Single Language,
                  Pro,
                  Pro for Workstations,
                  Enterprise,
                  Enterprise multi-session,
                  IoT Enterprise,
                  Education.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
