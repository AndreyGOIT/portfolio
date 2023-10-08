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

const SoftSkills = () => {
  const { colorMode } = useColorMode(); // Получаем текущий режим цветов

  return (
    <Box
      bg={colorMode === "light" ? "gray.200" : "gray.800"}
      position={"relative"}
    >
      <Container as="section" maxW={"7xl"} p="40px">
        <Center>
          <Flex flexDirection={"column"} gap={4}>
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
              Soft Skills
            </Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdCheckCircle} boxSize={6} color="green.500" />
                <Text as="b" fontSize="xl">
                  {" "}
                  Attention to Detail:{" "}
                </Text>
                <br />
                <Text as="p" fontSize="xl">
                  My meticulous attention to detail ensures that every aspect of
                  a project is carefully considered and executed. I pride myself
                  on delivering work that not only meets but exceeds
                  expectations, ensuring a high level of accuracy and precision
                  in everything I do.
                </Text>
              </ListItem>

              <ListItem>
                <ListIcon as={MdCheckCircle} boxSize={6} color="green.500" />
                <Text as="b" fontSize="xl">
                  {" "}
                  Teamwork:{" "}
                </Text>
                <br />
                <Text as="p" fontSize="xl">
                  I thrive in collaborative environments where I can contribute
                  my skills and ideas while appreciating the expertise of
                  others. I actively engage with team members, valuing diverse
                  perspectives and fostering an atmosphere of mutual respect.
                  Working together, we can achieve extraordinary results.
                </Text>
              </ListItem>

              <ListItem>
                <ListIcon as={MdCheckCircle} boxSize={6} color="green.500" />
                <Text as="b" fontSize="xl">
                  {" "}
                  Good Communication::{" "}
                </Text>
                <br />
                <Text as="p" fontSize="xl">
                  Effective communication is at the core of my work philosophy.
                  I believe in the power of clear and transparent communication
                  to prevent misunderstandings, promote collaboration, and
                  ensure that everyone is on the same page. I actively listen to
                  feedback, share ideas articulately, and am open to
                  constructive criticism, fostering a positive and productive
                  working environment.
                </Text>
              </ListItem>

              <ListItem>
                <ListIcon as={MdCheckCircle} boxSize={6} color="green.500" />
                <Text as="b" fontSize="xl">
                  {" "}
                  Problem Solving:{" "}
                </Text>
                <br />
                <Text as="p" fontSize="xl">
                  I approach challenges with a problem-solving mindset. Complex
                  issues inspire me to find creative and innovative solutions. I
                  analyze problems from multiple angles, break them down into
                  manageable parts, and develop effective strategies to overcome
                  them. I believe that every problem is an opportunity for
                  growth and learning.
                </Text>
              </ListItem>

              <ListItem>
                <ListIcon as={MdCheckCircle} boxSize={6} color="green.500" />
                <Text as="b" fontSize="xl">
                  {" "}
                  Team Communication:{" "}
                </Text>
                <br />
                <Text as="p" fontSize="xl">
                  In team settings, I emphasize open and respectful
                  communication. I actively contribute to discussions, encourage
                  others to share their thoughts, and ensure that every team
                  member feels heard and valued. By facilitating an atmosphere
                  of trust and openness, I enhance team dynamics, leading to
                  cohesive collaboration and successful outcomes.
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
