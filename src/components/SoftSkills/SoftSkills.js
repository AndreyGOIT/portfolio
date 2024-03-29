import React from "react";
import {
  Box,
  Container,
  Center,
  Heading,
  Flex,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { useTranslation } from "react-i18next";

// SoftSkills Component
const SoftSkills = () => {
  // Get current color mode
  const { colorMode } = useColorMode();
  // Get translation function
  const { t } = useTranslation();

  return (
    // Outer container for soft skills section
    <Box
      bg={colorMode === "light" ? "gray.200" : "gray.800"}
      position={"relative"}
    >
      {/* Container for soft skills content */}
      <Container as="section" maxW={"7xl"} p="40px">
        <Center>
          {/* Centered content */}
          <Flex flexDirection={"column"} gap={4}>
            {/* Heading */}
            <Heading
              textAlign="center"
              my="30px"
              mx={"auto"}
              p="20px 30px"
              color={"white"}
              bg={"gray.600"}
              w={{ base: "300px", lg: "370px" }}
              borderRadius={6}
              fontSize={{ base: "2xl", lg: "3xl" }}
            >
              {/* Translation for "Soft Skills" */}
              {t("Soft Skills")}
            </Heading>
            {/* List of soft skills */}
            <List spacing={3}>
              {/* Individual soft skill with its description */}
              <ListItem>
                <ListIcon as={MdCheckCircle} boxSize={6} color="green.500" />
                {/* Translation for "Attention to Detail" */}
                <Text as="b" fontSize="xl">
                  {" "}
                  {t("Attention to Detail")}{" "}
                </Text>
                <br />
                {/* Translation for the description of "Attention to Detail" */}
                <Text as="p" fontSize="xl">
                  {t("Text for Attention to Detail")}
                </Text>
              </ListItem>

              <ListItem>
                <ListIcon as={MdCheckCircle} boxSize={6} color="green.500" />
                <Text as="b" fontSize="xl">
                  {" "}
                  {t("Teamwork")}{" "}
                </Text>
                <br />
                <Text as="p" fontSize="xl">
                  {t("Text for Teamwork")}
                </Text>
              </ListItem>

              <ListItem>
                <ListIcon as={MdCheckCircle} boxSize={6} color="green.500" />
                <Text as="b" fontSize="xl">
                  {" "}
                  {t("Good Communication")}{" "}
                </Text>
                <br />
                <Text as="p" fontSize="xl">
                  {t("Text for Good Communication")}
                </Text>
              </ListItem>

              <ListItem>
                <ListIcon as={MdCheckCircle} boxSize={6} color="green.500" />
                <Text as="b" fontSize="xl">
                  {" "}
                  {t("Problem Solving")}{" "}
                </Text>
                <br />
                <Text as="p" fontSize="xl">
                  {t("Text for Problem Solving")}
                </Text>
              </ListItem>

              <ListItem>
                <ListIcon as={MdCheckCircle} boxSize={6} color="green.500" />
                <Text as="b" fontSize="xl">
                  {" "}
                  {t("Team Communication")}{" "}
                </Text>
                <br />
                <Text as="p" fontSize="xl">
                  {t("Text for Team Communication")}
                </Text>
              </ListItem>
            </List>
          </Flex>
        </Center>
      </Container>
    </Box>
  );
};

export default SoftSkills;
