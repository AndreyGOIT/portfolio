"use client";

import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Text,
  Icon,
  Flex,
  HStack,
  Center,
} from "@chakra-ui/react";
import { ReactComponent as MyHTML } from "../../images/html-5-svgrepo-com.svg";
import { ReactComponent as MyCSS3 } from "../../images/css-3-svgrepo-com.svg";
import { ReactComponent as MyJS } from "../../images/js-svgrepo-com.svg";
import { ReactComponent as MyReact } from "../../images/react-svgrepo-com.svg";
import { ReactComponent as MyVSCode } from "../../images/vs-code-svgrepo-com.svg";
import { ReactComponent as MyGitHub } from "../../images/github-svgrepo-com.svg";
import { ReactComponent as MyRestApi } from "../../images/rest-api-icon.svg";
import { ReactComponent as MyRespDesign } from "../../images/responsive-design-svgrepo-com.svg";

// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  const sliderRef = React.useRef(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "Movies",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "RestApi"],
      text: "The project is a web application designed for searching and exploring information about movies. Users can search for movies by title, view detailed information about specific movies, including descriptions, ratings, cast, and critics' reviews. Additionally, users can bookmark movies and manage their favorites. The application provides a convenient and interactive interface for movie enthusiasts looking for new films or wanting to learn more about their favorite ones.",
      URL: "https://andreygoit.github.io/goit-react-hw-05-movies/",
      year: "2022",
      link: "https://andreygoit.github.io/goit-react-hw-05-movies/",
    },
    {
      title: "Filmoteka",
      technologies: ["HTML5", "CSS3", "JavaScript", "React"],
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      URL: "https://andreygoit.github.io/Filmoteka-GOIT/index.html",
    },
    {
      title: "WebStudio",
      technologies: ["RespDesign", "HTML5", "CSS3", "VSC"],
      text: "Explore my WebStudio project, a beautifully crafted website showcasing advanced HTML and CSS skills. With a focus on responsive design, this project demonstrates expertise in creating seamless user experiences across various devices. The website incorporates modern design principles, ensuring both aesthetic appeal and functionality. Dive into the project to witness a blend of creativity and technical proficiency, exemplifying my dedication to delivering visually captivating and user-friendly web solutions.",
      URL: "https://andreygoit.github.io/goit-markup-hw-08/",
    },
    {
      title: "Phonebook",
      technologies: ["VSC", "HTML5", "CSS3", "JavaScript", "React", "GitHub"],
      text: "App you can save contacts of your friends",
      URL: "https://andreygoit.github.io/goit-react-hw-08-phonebook",
    },
  ];

  const TechnologiesIcons = {
    VSC: MyVSCode,
    HTML5: MyHTML,
    CSS3: MyCSS3,
    JavaScript: MyJS,
    React: MyReact,
    GitHub: MyGitHub,
    RestApi: MyRestApi,
    RespDesign: MyRespDesign,
  };

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
      px={"80px"}
      bg={"blue.700"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => sliderRef.current.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => sliderRef.current.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={sliderRef}>
        {cards.map((card, index) => (
          <Box key={index} height={"6xl"} position="relative">
            <Flex>
              <Box w={"50%"} h={"600px"} bg={"black"} p={4}>
                <iframe
                  width="100%"
                  height="100%"
                  src={card.URL}
                  title={card.title}
                ></iframe>
              </Box>
              <Box w={"50%"} h={"600px"} bg={"black"} p={4}>
                <Stack spacing={6} w={"full"} maxW={"lg"}>
                  <Center>
                    <Box
                      as="h3"
                      w="fit-content"
                      bg="white"
                      color="black"
                      fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                      p={"8px 25px"}
                      mb={4}
                    >
                      {card.title}
                    </Box>
                  </Center>
                  <HStack>
                    <Text fontSize={{ base: "md", lg: "lg" }} color="white">
                      <b>Technologies:</b>
                    </Text>
                    {card.technologies.map((tech, idx) => (
                      <Box
                        key={idx}
                        w={20}
                        bg={
                          TechnologiesIcons[tech] === "RestApi"
                            ? "white"
                            : "black"
                        }
                      >
                        <Icon
                          as={TechnologiesIcons[tech]}
                          w={"60px"}
                          h={"60px"}
                        />
                        <Center>
                          <Text as="b" color={"white"}>
                            {tech}
                          </Text>
                        </Center>
                      </Box>
                    ))}
                  </HStack>
                  <Text fontSize={{ base: "md", lg: "lg" }} color="white">
                    <b>About:</b> {card.text}
                  </Text>
                </Stack>
              </Box>
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
