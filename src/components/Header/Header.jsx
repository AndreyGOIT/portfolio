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
import { ReactComponent as MyLinkedIn } from "../../images/linkedin-outline-svgrepo-com.svg";
// import AvatarWithRipple from "../AvatarWithRipple/AvatarWithRipple";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const iconColor = {
    light: "gray.700",
    dark: "white",
  };

  return (
    <Box
      as="header"
      bg={colorMode === "light" ? "gray.200" : "gray.900"}
      color={colorMode === "light" ? "gray.700" : "gray.200"}
      p={4}
    >
      <Container maxW="container.lg">
        <Flex align="center">
          <Heading
            // size={{ base: "44px", md: "40px", lg: "86px" }}
            color={colorMode === "light" ? "gray.700" : "gray.200"}
          >
            Andrey (Andy) Erokhin
          </Heading>
          <Spacer />
          <Box as="div" mr={2}>
            <Text fontWeight={"bold"}>Hiring?</Text>
            <Text fontWeight={"bold"}>Need a website?</Text>
            <Text fontWeight={"bold"}>Want to collaborate?</Text>
          </Box>
          <Flex
            flexDir={{ base: "column", md: "row" }}
            mr={3}
            gap={{ mob: "1px", tab: "10px" }}
          >
            <Box as="a" href="mailto: and.ero@icloud.com">
              <Icon as={MyMail} w={7} h={7} fill={iconColor[colorMode]} />
            </Box>
            <Box as="a" href="https://github.com/AndreyGOIT">
              <Icon as={MyGit} w={7} h={7} fill={iconColor[colorMode]} />
            </Box>
            <Box as="a" href="https://www.linkedin.com/in/andrey-erokhin">
              <Icon as={MyLinkedIn} w={7} h={7} fill={iconColor[colorMode]} />
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
        icon={colorMode === "dark" ? <FaMoon /> : <FaSun />}
      />
    </Box>
  );
};

export default Header;
