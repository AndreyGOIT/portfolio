import React, { useState } from "react";
import "./SliderCss.css";

import {
  Box,
  Text,
  Icon,
  Center,
  Flex,
  Link,
  IconButton,
} from "@chakra-ui/react";

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import { ExternalLinkIcon } from "@chakra-ui/icons";

import { ReactComponent as MyHTML } from "../../images/html-5-svgrepo-com.svg";
import { ReactComponent as MyCSS3 } from "../../images/css-3-svgrepo-com.svg";
import { ReactComponent as MyJS } from "../../images/js-svgrepo-com.svg";
import { ReactComponent as MyReact } from "../../images/react-svgrepo-com.svg";
import { ReactComponent as MyVSCode } from "../../images/vs-code-svgrepo-com.svg";
import { ReactComponent as MyGitHub } from "../../images/github-svgrepo-com.svg";
import { ReactComponent as MyRestApi } from "../../images/rest-api-icon.svg";
import { ReactComponent as MyRespDesign } from "../../images/responsive-design-svgrepo-com.svg";

export const items = [
  {
    title: "Movies",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "RestApi", "GitHub"],
    text: "The project is a web application designed for searching and exploring information about movies. Users can search for movies by title, view detailed information about specific movies, including descriptions, ratings, cast, and critics' reviews. Additionally, users can bookmark movies and manage their favorites. The application provides a convenient and interactive interface for movie enthusiasts looking for new films or wanting to learn more about their favorite ones.",
    URL: "https://andreygoit.github.io/goit-react-hw-05-movies/",
    year: "2022",
    liveLink: "http://andreygoit.github.io/goit-react-hw-05-movies/",
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
    URL: "https://andreygoit.github.io/Filmoteka-GOIT/",
    year: "2023",
    liveLink: "https://andreygoit.github.io/Filmoteka-GOIT",
    link: "https://github.com/AndreyGOIT/Filmoteka-GOIT",
  },
  {
    title: "WebStudio",
    technologies: ["RespDesign", "HTML5", "CSS3", "VSC", "GitHub"],
    text: "Explore my WebStudio project, a beautifully crafted website showcasing advanced HTML and CSS skills. With a focus on responsive design, this project demonstrates expertise in creating seamless user experiences across various devices. The website incorporates modern design principles, ensuring both aesthetic appeal and functionality. Dive into the project to witness a blend of creativity and technical proficiency, exemplifying my dedication to delivering visually captivating and user-friendly web solutions.",
    URL: "https://andreygoit.github.io/goit-markup-hw-08",
    year: "2022",
    liveLink: "https://andreygoit.github.io/goit-markup-hw-08",
    link: "https://github.com/AndreyGOIT/goit-markup-hw-08",
  },
  {
    title: "Phonebook",
    technologies: ["VSC", "HTML5", "CSS3", "JavaScript", "React", "GitHub"],
    text: "Phonebook is a web application designed for convenient storage and management of contacts. The application allows users to add new contacts with specified names and phone numbers. Contacts can be edited or deleted, and users can perform quick searches for existing contacts. Phonebook provides a simple and effective way to organize personal contact information.",
    URL: "https://andreygoit.github.io/goit-react-hw-08-phonebook",
    year: "2023",
    liveLink: "https://andreygoit.github.io/goit-react-hw-08-phonebook",
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

export const SliderCss = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = items.length;

  const handlePrev = () => {
    setActiveIndex(Math.max(activeIndex - 1, 0));
  };

  const handleNext = () => {
    setActiveIndex(Math.min(activeIndex + 1, totalItems - 1));
  };

  const currentItem = items[activeIndex];

  return (
    <Box
      as={"div"}
      position={"relative"}
      height={{
        base: "800px",
        mobMax: "750px",
        tab: "600px",
      }}
      width={"100%"}
      overflow={"hidden"}
      px={1}
      bg={"gray.600"}
    >
      <Flex
        display={"flex"}
        gap={3}
        flexWrap={"wrap"}
        alignItems={"start"}
        flexDirection={"column"}
        w={{
          base: "100%",
          mobMax: "480px",
          tab: "768px",
          tabMax: "960px",
          desk: "1280px",
        }}
        h={"100%"}
        // px={{
        //   base: "15px",
        //   tab: "20px",
        //   desk: "10px",
        // }}
        mx={"auto"}
      >
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={2}
          top={"50%"}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => {
            handlePrev();
          }}
        >
          <BiLeftArrowAlt color={"white"} size="40px" />
        </IconButton>
        <Box as="div" bg={"gray.700"} className={`slide active`}>
          {/* Project example */}
          <div className="slideContent slideFrame">
            <iframe
              width="100%"
              height="100%"
              src={currentItem.URL}
              title={currentItem.title}
            ></iframe>
          </div>

          {/* About project */}
          <div className="slideContent">
            <Flex
              as={"div"}
              justifyContent={"center"}
              alignItems={"center"}
              backgroundColor={"white"}
              borderRadius={6}
              h={"50px"}
              w={{
                base: "150px",
                mobMax: "200px",
                tab: "300px",
                tabMax: "400px",
                desk: "500px",
              }}
              py={"45px"}
              mb={{ base: "5px", tab: "15px" }}
            >
              <Text
                as={"h3"}
                fontSize={{ base: "30px", md: "34px", lg: "38px" }}
                lineHeight={"1.3"}
                fontWeight={"700"}
                color={"black"}
              >
                {currentItem.title}
              </Text>
            </Flex>

            {/* Technologies */}
            <Flex
              alignItems={"center"}
              gap={{ base: "5px", md: "8px", lg: "10px" }}
              flexWrap={"wrap"}
            >
              <Text
                as={"b"}
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                color={"white"}
              >
                Technologies:
              </Text>{" "}
              {currentItem.technologies.map((tech, idx) => (
                <Box key={idx} className="techBox">
                  <Icon
                    as={TechnologiesIcons[tech]}
                    w={{ base: "7", md: "8", lg: "9" }}
                    h={{ base: "7", md: "8", lg: "9" }}
                    className="techIcon"
                  />
                  <Center mt="2">
                    <Text
                      as="b"
                      fontSize={{ base: "xs", tab: "sm", desk: "lg" }}
                      color={"white"}
                      className="techText"
                    >
                      {tech}
                    </Text>
                  </Center>
                </Box>
              ))}
            </Flex>

            {/* About */}

            <Text
              as="p"
              fontSize={{ base: "12px", tab: "14px", desk: "16px" }}
              color="white"
            >
              <b>About: </b>
              {currentItem.text}
            </Text>

            {/* Year */}
            <Text
              as="p"
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              color="white"
            >
              <b>Year: </b>
              {currentItem.year}
            </Text>

            {/* Links */}
            <Flex gap={2} align={"baseline"}>
              <Text
                as="p"
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                color="white"
              >
                <b>Links: </b>
              </Text>
              <Link as="a" isExternal href={currentItem.liveLink} color="white">
                live <ExternalLinkIcon mx="2px" />
              </Link>
              <Text as="p" fontSize="lg" color="white">
                |
              </Text>
              <Link as="a" isExternal href={currentItem.link} color="white">
                github <ExternalLinkIcon mx="2px" />
              </Link>
            </Flex>
          </div>
        </Box>

        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={2}
          top={"50%"}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => handleNext()}
        >
          <BiRightArrowAlt color={"white"} size="40px" />
        </IconButton>
      </Flex>
    </Box>
  );
};
