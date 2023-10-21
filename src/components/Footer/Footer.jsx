"use client";

import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  useColorMode,
  Divider,
  Center,
} from "@chakra-ui/react";

import { ReactComponent as MyMail } from "../../images/mail-alt-3-svgrepo-com.svg";
import { ReactComponent as MyGit } from "../../images/github-142-svgrepo-com.svg";
import { ReactComponent as MyLinkedIn } from "../../images/linkedin-outline-svgrepo-com.svg";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();

  const iconColor = {
    light: "gray.700",
    dark: "white",
  };

  return (
    <Box
      bg={colorMode === "light" ? "gray.200" : "gray.900"}
      color={colorMode === "light" ? "gray.700" : "gray.200"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "center" }}
        align={{ base: "center", md: "center" }}
        borderBottom={"2px solid gray"}
      >
        <Box>
          <Flex
            flexWrap={"wrap"}
            justifyContent={"center"}
            align={"center"}
            gap={5}
          >
            <Box as="div">
              <Text fontWeight={"bold"}>{t("hiring")}</Text>
              <Text fontWeight={"bold"}>{t("need")}</Text>
              <Text fontWeight={"bold"}>{t("want")}</Text>
            </Box>
            <Box as="div">
              <Text fontWeight={"bold"}>{t("reachOut")}</Text>
            </Box>
            <Flex mr={3} gap={3}>
              <Box as="a" href="mailto: and.ero@icloud.com">
                <MyMail width={30} height={30} fill={iconColor[colorMode]} />
              </Box>
              <Box as="a" href="https://github.com/AndreyGOIT">
                <MyGit width={30} height={30} fill={iconColor[colorMode]} />
              </Box>
              <Box as="a" href="https://www.linkedin.com/in/andrey-erokhin">
                <MyLinkedIn
                  width={30}
                  height={30}
                  fill={iconColor[colorMode]}
                />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Container>
      <Divider colorScheme={"blackAlpha"} />
      <Center>
        <Box as="div" my={3}>
          <Text>{t("created")}</Text>
        </Box>
      </Center>
    </Box>
  );
}
