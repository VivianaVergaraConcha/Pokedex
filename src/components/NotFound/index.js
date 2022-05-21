import React from "react";
import Message from "../Common/Message";
import psyduck from "../../assets/img/psyduck.jpg";

const NotFound = () => (
    <Message title="404" message="Not Found" image={psyduck} />
);

export default NotFound;
