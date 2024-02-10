"use client";

import {
  Flex,
  Container,
  Heading,
  Box,
  Icon,
  Text,
  Center,
} from "@chakra-ui/react"; // Import necessary components from Chakra UI library

// Import SVG icons for hard skills
import { ReactComponent as MyHTML } from "../../images/html-5-svgrepo-com.svg";
import { ReactComponent as MyVSCode } from "../../images/vs-code-svgrepo-com.svg";
import { ReactComponent as MyCSS3 } from "../../images/css-3-svgrepo-com.svg";
import { ReactComponent as MyJS } from "../../images/js-svgrepo-com.svg";
import { ReactComponent as MyReact } from "../../images/react-svgrepo-com.svg";
import { ReactComponent as MyNode } from "../../images/nodejs-1-logo-svgrepo-com.svg";
import { ReactComponent as MyGitHub } from "../../images/github-svgrepo-com.svg";
import { ReactComponent as MyRedux } from "../../images/redux-svgrepo-com.svg";
import { ReactComponent as MyMongoDB } from "../../images/mongodb-svgrepo-com.svg";
import { ReactComponent as MyChatGPT } from "../../images/openai-svgrepo-com.svg";
import { ReactComponent as MyNext } from "../../images/next-js-svgrepo-com.svg";
import { ReactComponent as MyTypeScript } from "../../images/typescript-svgrepo-com.svg";

import { useTranslation } from "react-i18next";

// HardSkills component
const HardSkills = () => {
  const { t } = useTranslation(); // Use translation hook to access translations

  return (
    <Box position={"relative"}>
      <Container as="section" maxW={"7xl"} p="40px">
        <Center>
          <Flex
            flexDirection={"column"}
            gap={4}
            flexWrap="wrap"
            justify="center"
            textAlign="center"
          >
            {/* Title */}
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
              {t("Hard Skills")} {/* Render translated title */}
            </Heading>
            <Flex
              gap={6}
              flexWrap="wrap" // Этот атрибут позволяет иконкам переноситься на новую строку при нехватке места в текущей строке
              justify="center"
              textAlign="center"
            >
              {/* Individual skill boxes */}
              <Box w={{ base: "80px", md: "90px" }}>
                <Icon as={MyHTML} w={20} h={20} /> {/* Render HTML icon */}
                <Center>
                  <Text as="b">HTML5</Text> {/* Render skill name */}
                </Center>
              </Box>
              {/* Similar pattern for other skills */}
              <Box w={{ base: "80px", md: "90px" }}>
                <Icon as={MyCSS3} w={20} h={20} />
                <Center>
                  <Text as="b">CSS3</Text>
                </Center>
              </Box>

              <Box w={{ base: "80px", md: "90px" }}>
                <Icon as={MyJS} w={20} h={20} />
                <Center>
                  <Text as="b">Java Script</Text>
                </Center>
              </Box>

              <Box w={{ base: "80px", md: "90px" }}>
                <Icon as={MyReact} w={20} h={20} />
                <Center>
                  <Text as="b">React</Text>
                </Center>
              </Box>

              <Box w={{ base: "80px", md: "90px" }}>
                <Icon as={MyNode} w={20} h={20} />
                <Center>
                  <Text as="b">Node JS</Text>
                </Center>
              </Box>

              <Box w={{ base: "80px", md: "90px" }}>
                <Icon as={MyRedux} w={20} h={20} />
                <Center>
                  <Text as="b">Redux</Text>
                </Center>
              </Box>

              <Box w={{ base: "80px", md: "90px" }}>
                <Icon as={MyMongoDB} w={20} h={20} />
                <Center>
                  <Text as="b">MongoDB</Text>
                </Center>
              </Box>

              <Box w={{ base: "80px", md: "90px" }}>
                <Icon as={MyNext} w={20} h={20} />
                <Center>
                  <Text as="b">Next JS</Text>
                </Center>
              </Box>

              <Box w={{ base: "80px", md: "90px" }}>
                <Icon as={MyTypeScript} w={20} h={20} />
                <Center>
                  <Text as="b">TypeScript</Text>
                </Center>
              </Box>

              <Box w={{ base: "80px", md: "90px" }}>
                <Icon as={MyGitHub} w={20} h={20} />
                <Center>
                  <Text as="b">GitHub</Text>
                </Center>
              </Box>

              <Box w={{ base: "80px", md: "90px" }}>
                <Icon as={MyChatGPT} w={20} h={20} />
                <Center>
                  <Text as="b">ChatGPT</Text>
                </Center>
              </Box>

              <Box w={{ base: "80px", md: "90px" }}>
                <Icon as={MyVSCode} w={20} h={20} />
                <Center>
                  <Text as="b">VS Code</Text>
                </Center>
              </Box>
            </Flex>
          </Flex>
        </Center>
      </Container>
    </Box>
  );
};
export default HardSkills; // Export HardSkills component
