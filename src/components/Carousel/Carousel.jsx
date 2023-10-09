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
  Center,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
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
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "RestApi",
        "GitHub",
      ],
      text: "The project is a web application designed for searching and exploring information about movies. Users can search for movies by title, view detailed information about specific movies, including descriptions, ratings, cast, and critics' reviews. Additionally, users can bookmark movies and manage their favorites. The application provides a convenient and interactive interface for movie enthusiasts looking for new films or wanting to learn more about their favorite ones.",
      URL: "https://andreygoit.github.io/goit-react-hw-05-movies/",
      year: "2022",
      link: "https://github.com/AndreyGOIT/goit-react-hw-05-movies",
    },
    {
      title: "Filmoteka",
      technologies: [
        "VSC",
        "HTML5",
        "CSS3",
        "RespDesign",
        "JavaScript",
        "React",
        "RestApi",
        "GitHub",
      ],
      text: "Filmoteka is a sophisticated movie database web application, demonstrating advanced frontend development skills. Crafted with HTML5, CSS3, and JavaScript, it offers an intuitive user interface for movie enthusiasts. The responsive design ensures seamless user experience across devices, showcasing technical proficiency and interactivity.",
      URL: "https://andreygoit.github.io/Filmoteka-GOIT/index.html",
      year: "2023",
      link: "https://github.com/AndreyGOIT/Filmoteka-GOIT",
    },
    {
      title: "WebStudio",
      technologies: ["RespDesign", "HTML5", "CSS3", "VSC", "GitHub"],
      text: "Explore my WebStudio project, a beautifully crafted website showcasing advanced HTML and CSS skills. With a focus on responsive design, this project demonstrates expertise in creating seamless user experiences across various devices. The website incorporates modern design principles, ensuring both aesthetic appeal and functionality. Dive into the project to witness a blend of creativity and technical proficiency, exemplifying my dedication to delivering visually captivating and user-friendly web solutions.",
      URL: "https://andreygoit.github.io/goit-markup-hw-08",
      year: "2022",
      link: "https://github.com/AndreyGOIT/goit-markup-hw-08",
    },
    {
      title: "Phonebook",
      technologies: ["VSC", "HTML5", "CSS3", "JavaScript", "React", "GitHub"],
      text: "Phonebook is a web application designed for convenient storage and management of contacts. The application allows users to add new contacts with specified names and phone numbers. Contacts can be edited or deleted, and users can perform quick searches for existing contacts. Phonebook provides a simple and effective way to organize personal contact information.",
      URL: "https://andreygoit.github.io/goit-react-hw-08-phonebook",
      year: "2023",
      link: "https://github.com/AndreyGOIT/goit-react-hw-08-phonebook",
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
      bg={"gray.600"}
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
        <BiLeftArrowAlt color={"white"} size="40px" />
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
        <BiRightArrowAlt color={"white"} size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={sliderRef}>
        {cards.map((card, index) => (
          <Box key={index} height={"6xl"} position="relative">
            <Flex>
              <Box w={"50%"} h={"600px"} bg={"gray.700"} p={4}>
                <iframe
                  width="100%"
                  height="100%"
                  src={card.URL}
                  title={card.title}
                ></iframe>
              </Box>
              <Box w={"50%"} h={"600px"} bg={"gray.700"} p={4}>
                <Stack spacing={4} w={"full"} maxW={"100%"}>
                  <Center>
                    <Box
                      as="h3"
                      w="fit-content"
                      bg="white"
                      color="black"
                      fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                      p={"8px 25px"}
                      mb={1}
                      borderRadius={6}
                    >
                      {card.title}
                    </Box>
                  </Center>
                  <Flex wrap="wrap" alignItems="center" gap={1}>
                    <Text fontSize={{ base: "md", lg: "lg" }} color="white">
                      <b>Technologies: </b>
                    </Text>
                    {card.technologies.map((tech, idx) => (
                      <Box
                        key={idx}
                        w={{ base: "50px", lg: "70px" }} // Адаптивная ширина для контейнера
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        bg={
                          TechnologiesIcons[tech] === "RestApi"
                            ? "white"
                            : "gray.700"
                        }
                        borderRadius="md" // Округление углов для красивого вида
                        p="2" // Отступы внутри блока
                      >
                        <Icon
                          as={TechnologiesIcons[tech]}
                          w={{ base: "30px", lg: "40px" }} // Адаптивная ширина для иконки
                          h={{ base: "30px", lg: "40px" }} // Адаптивная высота для иконки
                        />
                        <Center mt="2">
                          <Text
                            as="b"
                            color={"white"}
                            fontSize={{ base: "xs", lg: "sm" }} // Адаптивный размер текста
                          >
                            {tech}
                          </Text>
                        </Center>
                      </Box>
                    ))}
                  </Flex>
                  <Box w={"100%"}>
                    <Text fontSize={{ base: "md", lg: "lg" }} color="white">
                      <b>About:</b> {card.text}
                    </Text>
                  </Box>
                  <Text fontSize={{ base: "md", lg: "lg" }} color="white">
                    <b>Year: </b>
                    {card.year}
                  </Text>
                  <Flex gap={1} align={"baseline"}>
                    <Text
                      fontSize={{ base: "md", lg: "lg" }}
                      fontWeight={"700"}
                      color="white"
                    >
                      Links:
                    </Text>
                    <Link
                      href={card.URL}
                      isExternal
                      color="white"
                      // onClick={() => console.log(card.URL)}
                    >
                      Live page <ExternalLinkIcon mx="2px" />
                    </Link>
                    <Text fontSize={{ base: "md", lg: "lg" }} color="white">
                      |
                    </Text>
                    <Link
                      href={card.link}
                      isExternal
                      color="white"
                      // onClick={() => console.log(card.link)}
                    >
                      GitHub <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Flex>
                </Stack>
              </Box>
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
