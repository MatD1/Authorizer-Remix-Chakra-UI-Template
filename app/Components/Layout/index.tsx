import { Box, Divider } from "@chakra-ui/react";
import React from "react";
import { Nav } from "../Navigation/Nav";

export default function Layout({children}: any) {
  return (
    <React.Fragment>
      <Nav />
      <Box m={5}>
        {children}
      </Box>
    </React.Fragment>
  );
}
