import {
  Flex,
  Container,
  Heading,
  Box,
  Icon,
  Text,
  Center,
} from "@chakra-ui/react";

import { ReactComponent as MyAngular } from "../../images/angular-svgrepo-com.svg";
import { ReactComponent as MyDocker } from "../../images/docker-svgrepo-com.svg";
import { ReactComponent as MyNext } from "../../images/next-js-svgrepo-com.svg";
import { ReactComponent as MyTypeScript } from "../../images/typescript-svgrepo-com.svg";
import { ReactComponent as MyVue } from "../../images/vue-svgrepo-com.svg";
import { ReactComponent as MyWordPress } from "../../images/wordpress-color-svgrepo-com.svg";
import { ReactComponent as MyReactNative } from "../../images/react-native-1.svg";

const NextGoals = () => {
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
            <Heading
              textAlign="center"
              my="30px"
              mx={"auto"}
              p="20px 30px"
              color={"white"}
              bg={"gray.600"}
              w={250}
              borderRadius={6}
            >
              NextGoals
            </Heading>
            <Flex
              gap={6}
              flexWrap="wrap" // Этот атрибут позволяет иконкам переноситься на новую строку при нехватке места в текущей строке
              justify="center"
              textAlign="center"
            >
              <Box w={{ base: "80px", md: "90px" }}>
                <Icon as={MyAngular} w={20} h={20} />
                <Center>
                  <Text as="b">Angular</Text>
                </Center>
              </Box>

              <Box w={{ base: "80px", md: "90px" }}>
                <Icon as={MyDocker} w={20} h={20} />
                <Center>
                  <Text as="b">Docker</Text>
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
                <Icon as={MyVue} w={20} h={20} />
                <Center>
                  <Text as="b">Vue JS</Text>
                </Center>
              </Box>

              <Box w={{ base: "80px", md: "90px" }}>
                <Icon as={MyWordPress} w={20} h={20} />
                <Center>
                  <Text as="b">WordPress</Text>
                </Center>
              </Box>

              <Box w={{ base: "80px", md: "90px" }}>
                <Icon as={MyReactNative} w={20} h={20} />
                <Center>
                  <Text as="b">ReactNative</Text>
                </Center>
              </Box>
            </Flex>
          </Flex>
        </Center>
      </Container>
    </Box>
  );
};

export default NextGoals;
