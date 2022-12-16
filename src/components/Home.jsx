import { Text, Box, Image } from "@chakra-ui/react";
import React from "react";

import homeMainImage from "../assets/bitcoin.gif";

const Home = () => {
  return (
    <Box w={"full"} h={"85vh"} bgColor={"blue.200"}>
      <Image
        w={"full"}
        h={"full"}
        src={homeMainImage}
        objectFit={"cover"}
        alt={"mainImage"}
      />

      <Text
        fontSize={["2xl", "6xl"]}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whitesmoke"}
        bgColor={"blackAlpha.700"}
        textTransform={"uppercase"}
      >
        Crypto - Currency
      </Text>
    </Box>
  );
};

export default Home;
