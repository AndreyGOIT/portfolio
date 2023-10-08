import {
  Box,
  Container,
  Heading,
  Flex,
  Spacer,
  IconButton,
  useColorMode,
  Icon,
  Text,
} from "@chakra-ui/react";
import { ReactComponent as MyMail } from "../../images/mail-alt-3-svgrepo-com.svg";
import { ReactComponent as MyGit } from "../../images/github-142-svgrepo-com.svg";
import { ReactComponent as MyLinkedIn } from "../../images/linkedin-svgrepo-com.svg";
// import AvatarWithRipple from "../AvatarWithRipple/AvatarWithRipple";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box as="header" bg="gray.200" p={4}>
      <Container maxW="container.lg">
        <Flex align="center">
          <Heading color="black">Andrey (Andy) Erokhin</Heading>
          <Spacer />
          <Box as="div" mr={2}>
            <Text fontWeight={"bold"}>Hiring?</Text>
            <Text fontWeight={"bold"}>Need a website?</Text>
            <Text fontWeight={"bold"}>Want to collaborate?</Text>
          </Box>
          <Flex mr={3} gap={3}>
            <Box as="a" href="mailto: and.ero@icloud.com">
              <Icon as={MyMail} w={7} h={7} />
            </Box>
            <Box as="a" href="https://github.com/AndreyGOIT">
              <Icon as={MyGit} w={7} h={7} />
            </Box>
            <Box as="a" href="https://www.linkedin.com/in/andrey-erokhin">
              <Icon as={MyLinkedIn} w={7} h={7} />
            </Box>
          </Flex>
          {/* <AvatarWithRipple /> */}
        </Flex>
      </Container>
      <IconButton
        aria-label="toggle theme"
        rounded="full"
        size="xs"
        position="absolute"
        top={10}
        right={3}
        onClick={toggleColorMode}
        icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
      />
    </Box>
  );
};

export default Header;
