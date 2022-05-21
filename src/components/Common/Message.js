import React from "react";
import { Container } from "@material-ui/core";

const Message = ({title, message, image}) => {
  return (
    <Container
      fixed
      maxWidth="lg"
      className="container-message"
    >
      <div className="title">{title}</div>
      <div className="message">{message}</div>
      <img src={image} alt="Not Found" />
    </Container>
  );
};

export default Message;
