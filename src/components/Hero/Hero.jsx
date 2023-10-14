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

const StatsText = ({ children }) => (
  <Text as={"p"} fontWeight={700} color={"white"}>
    {children}
  </Text>
);

const stats = [
  {
    title: "Professional Journey:",
    content: (
      <>
        <StatsText>
          Having spent years in the business world, I decided to follow my
          passion for IT.
        </StatsText>{" "}
        I honed my skills as a full-stack developer at GOIT Academy, where I
        developed a deep understanding of various technologies and
        methodologies. My experience spans both individual and team projects,
        all of which have been successful and have contributed to my growth as a
        developer.
      </>
    ),
  },
  {
    title: "Continuous Learner:",
    content: (
      <>
        <StatsText>
          I am a perpetual learner, constantly seeking to expand my horizons
          both professionally and personally.{" "}
        </StatsText>{" "}
        I thrive on challenges and love diving into new projects that test my
        abilities. My engineering background provides me with a unique
        perspective, allowing me to approach coding problems with creativity and
        innovation.
      </>
    ),
  },
  {
    title: "Why Software Development:",
    content: (
      <>
        <StatsText>
          My journey into software development was not just a career choice; it
          was a natural evolution.{" "}
        </StatsText>{" "}
        The logical mindset I developed as an engineer, combined with my
        business acumen, enhances my ability to create efficient and effective
        software solutions.
      </>
    ),
  },
  {
    title: "What I Bring:",
    content: (
      <>
        <WhatIBring />
      </>
    ),
  },
];

export default function Hero() {
  const { colorMode } = useColorMode();

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
                direction={{ base: "column", md: "row" }}
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
                  Full Stack Developer |
                </Heading>
                <Heading
                  as="h1"
                  color={"white"}
                  fontSize={{ base: "xl", md: "3xl" }}
                >
                  Porvoo, Finland
                </Heading>
              </Flex>

              <Text fontSize={["xl", "xl", "2xl"]} color={"white"}>
                Hello there! I am a passionate software developer with a diverse
                background that shapes my unique approach to problem-solving.
                Originally trained as a chemical engineer, I transitioned
                seamlessly into the world of technology driven by my fascination
                for IT.
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
                fontSize={"3xl"}
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
