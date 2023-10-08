"use client";

import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Flex,
  Icon,
} from "@chakra-ui/react";

import { ReactComponent as MyMail } from "../../images/mail-alt-3-svgrepo-com.svg";
import { ReactComponent as MyGit } from "../../images/github-142-svgrepo-com.svg";
import { ReactComponent as MyLinkedIn } from "../../images/linkedin-svgrepo-com.svg";

// const SocialButton = ({ children, label, href }) => {
//   return (
//     <chakra.button
//       bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
//       rounded={"full"}
//       w={8}
//       h={8}
//       cursor={"pointer"}
//       as={"a"}
//       href={href}
//       display={"inline-flex"}
//       alignItems={"center"}
//       justifyContent={"center"}
//       transition={"background 0.3s ease"}
//       _hover={{
//         bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
//       }}
//     >
//       <VisuallyHidden>{label}</VisuallyHidden>
//       {children}
//     </chakra.button>
//   );
// };

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
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
            <Icon as={MyMail} w={7} h={7} />
          </Box>
          <Box as="a" href="https://github.com/AndreyGOIT">
            <Icon as={MyGit} w={7} h={7} />
          </Box>
          <Box as="a" href="https://www.linkedin.com/in/andrey-erokhin">
            <Icon as={MyLinkedIn} w={7} h={7} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
