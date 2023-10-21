"use client";

import {
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import WhatIBring from "../WhatIBring";
import { useTranslation } from "react-i18next";

const StatsText = ({ children }) => (
  <Text as={"p"} fontWeight={700} color={"white"}>
    {children}
  </Text>
);

export default function Hero() {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();

  const stats = [
    {
      title: t("Professional Journey"),
      content: (
        <>
          <StatsText>{t("Text for professional journey")}</StatsText>
          {t("Additional text for professional journey")}
        </>
      ),
    },
    {
      title: t("Continuous Learner"),
      content: (
        <>
          <StatsText>{t("Text for Continuous Learner")}</StatsText>
          {t("Additional Text for Continuous Learner")}
        </>
      ),
    },
    {
      title: t("Why Software Development"),
      content: (
        <>
          <StatsText>{t("Text for Why Software Development")}</StatsText>
          {t("Additional Text for Why Software Development")}
        </>
      ),
    },
    {
      title: t("What I Bring"),
      content: (
        <>
          <WhatIBring />
        </>
      ),
    },
  ];

  return (
    <Box
      as="main"
      bg={colorMode === "light" ? "gray.600" : "gray.700"}
      py={[10, 20, 35]}
      position={"relative"}
    >
      <Container maxW={"7xl"} zIndex={10} position={"relative"}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={{ lg: "center" }}
        >
          <Box mb={{ base: 8, md: 0 }} mr={{ md: 10 }} flex="1">
            <Box
              w={{ base: "100%", md: "400px" }}
              minW={{ md: "400px" }}
              mx="auto"
            >
              <Image
                src="/images/portfolio_photo_AE.jpeg"
                alt="photo Erokhin"
                w="100%"
                h="auto"
              />
            </Box>
          </Box>
          <Box flex="1">
            <Flex direction="column" gap={6}>
              <Flex
                direction={{ base: "row", md: "column", lg: "row" }}
                gap={1}
                align={"baseline"}
              >
                <Heading
                  as={"h1"}
                  color={"white"}
                  mb={5}
                  fontSize={{ base: "2xl", md: "4xl" }}
                  style={{ whiteSpace: "nowrap" }}
                >
                  {t("heroTitle1")}
                </Heading>
                <Heading
                  as="h1"
                  color={"white"}
                  fontSize={{ base: "xl", md: "3xl" }}
                >
                  {t("heroTitle2")}
                </Heading>
              </Flex>

              <Text fontSize={["xl", "xl", "2xl"]} color={"white"}>
                {t("heroText")}
              </Text>
            </Flex>
          </Box>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {stats.map((stat) => (
            <Box key={stat.title}>
              <Text
                as={"h2"}
                fontFamily={"heading"}
                fontSize={{ base: "2xl", md: "3xl" }}
                color={"white"}
                mb={3}
              >
                {stat.title}
              </Text>
              <Text as={"h3"} fontSize={"xl"} color={"white"}>
                {stat.content}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
