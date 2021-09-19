import React, { Component } from "react";
import {
  Button,
  Container,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
} from "react-bootstrap";

export default class Contacts extends Component {
  render() {
    return (
      <Container style={{ width: "500px" }}>
        <h1 className="text-center">Свяжитесь с нами</h1>
        <Form>
          <FormGroup controlId="formBasicEmail">
            <FormLabel>Email </FormLabel>
            <FormControl type="email" placeholder="Введите email" />
            <FormText>Мы никогда никому не передаем вашу электронную почту</FormText>
          </FormGroup>
          <FormGroup controlId="formBasicPassword">
            <FormLabel>Пример текстового поля</FormLabel>
            <FormControl as="textarea" rows="5" />
          </FormGroup>
          <FormGroup controlId="formBasicCheckbox">
            <FormCheck type="checkbox" label="Проверить меня" />
          </FormGroup>
          <Button vatiant="primary" type="submit">
            Отправить
          </Button>
        </Form>
      </Container>
    );
  }
}
