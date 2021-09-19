import React, { Component } from "react";

import Carousel from "react-bootstrap/Carousel";

import Img_1 from "../assets/1.webp";
import Img_2 from "../assets/2.webp";
import Img_3 from "../assets/3.webp";
import Img_4 from "../assets/4.png";
import Img_5 from "../assets/5.png";

export default class CaruselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "300px" }}
            className="d-block mx-auto"
            src={Img_1}
            alt="Img"
          />
          <Carousel.Caption>
            <h3 style={{ textAlign: 'left' }}>Windows 1.0</h3>
            <p style={{ textAlign: 'left' }}>Ноябрь 1985</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "300px" }}
            className="d-block mx-auto"
            src={Img_2}
            alt="Img"
          />
          <Carousel.Caption>
            <h3 style={{ textAlign: 'left' }}>Windows 98</h3>
            <p style={{ textAlign: 'left' }}>Июнь 1998</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "300px" }}
            className="d-block mx-auto"
            src={Img_3}
            alt="Img"
          />
          <Carousel.Caption>
            <h3 style={{ textAlign: 'left' }}>Windows XP</h3>
            <p style={{ textAlign: 'left' }}>Август 2001</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "300px" }}
            className="d-block mx-auto"
            src={Img_4}
            alt="Img"
          />
          <Carousel.Caption>
            <h3 style={{ textAlign: 'left' }}>Windows Vista</h3>
            <p style={{ textAlign: 'left' }}>Январь 2007</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "300px" }}
            className="d-block mx-auto"
            src={Img_5}
            alt="Img"
          />
          <Carousel.Caption>
            <h3 style={{ textAlign: 'left' }}>Windows 10</h3>
            <p style={{ textAlign: 'left' }}>Июль 2015</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel >
    );
  }
}
