import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const Error = ({ messages }) => {
  return (
    <Alert
      status="error"
      position={"fixed"}
      bottom={"4"}
      left={"50%"}
      transform={"translateX(-50%)"}
      width={"container.lg"}
    >
      <AlertIcon />
      {messages}
    </Alert>
  );
};

export default Error;
