"use client";

import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  useColorMode,
} from "@chakra-ui/react";

import { ReactComponent as MyMail } from "../../images/mail-alt-3-svgrepo-com.svg";
import { ReactComponent as MyGit } from "../../images/github-142-svgrepo-com.svg";
import { ReactComponent as MyLinkedIn } from "../../images/linkedin-svgrepo-com.svg";

export default function Footer() {
  const { colorMode } = useColorMode();

  const iconColor = {
    light: "gray.700",
    dark: "white",
  };

  return (
    <Box
      bg={colorMode === "light" ? "gray.50" : "gray.900"}
      color={colorMode === "light" ? "gray.700" : "gray.200"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>Created by Andy Erokhin. All rights reserved © 2023</Text>
        <Flex mr={3} gap={3}>
          <Box as="a" href="mailto: and.ero@icloud.com">
            <MyMail width={30} height={30} fill={iconColor[colorMode]} />
          </Box>
          <Box as="a" href="https://github.com/AndreyGOIT">
            <MyGit width={30} height={30} fill={iconColor[colorMode]} />
          </Box>
          <Box as="a" href="https://www.linkedin.com/in/andrey-erokhin">
            <MyLinkedIn width={30} height={30} fill={iconColor[colorMode]} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
