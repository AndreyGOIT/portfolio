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

// Import SVG icons
import { ReactComponent as MyHTML } from "../../images/html-5-svgrepo-com.svg";
import { ReactComponent as MyCSS3 } from "../../images/css-3-svgrepo-com.svg";
import { ReactComponent as MyJS } from "../../images/js-svgrepo-com.svg";
import { ReactComponent as MyReact } from "../../images/react-svgrepo-com.svg";
import { ReactComponent as MyVSCode } from "../../images/vs-code-svgrepo-com.svg";
import { ReactComponent as MyGitHub } from "../../images/github-svgrepo-com.svg";
import { ReactComponent as MyRestApi } from "../../images/rest-api-icon.svg";
import { ReactComponent as MyRespDesign } from "../../images/responsive-design-svgrepo-com.svg";

import { useTranslation } from "react-i18next";

// Map of technology names to corresponding SVG components
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

// SliderCss Component
export const SliderCss = () => {
  const { t } = useTranslation(); // Get translation function

  // Array of items containing project details
  const items = [
    // Each item represents a project
    {
      title: "Filmoteka",
      technologies: ["HTML5", "CSS3", "JavaScript", "React"],
      text: t("Text for Slider About Filmoteka"),
      URL: "https://andreygoit.github.io/Filmoteka-GOIT/index.html",
      year: "2023",
      liveLink: "https://andreygoit.github.io/Filmoteka-GOIT/index.html",
      link: "https://github.com/AndreyGOIT/Filmoteka-GOIT",
    },
    {
      title: "WebStudio",
      technologies: ["HTML5", "CSS3", "JavaScript", "React"],
      text: t("Text for Slider About WebStudio"),
      URL: "https://andreygoit.github.io/goit-markup-hw-08/",
      year: "2022",
      liveLink: "https://andreygoit.github.io/goit-markup-hw-08/",
      link: "https://github.com/AndreyGOIT/goit-markup-hw-08",
    },
    {
      title: "Phonebook",
      technologies: ["VSC", "HTML5", "CSS3", "JavaScript", "React", "GitHub"],
      text: t("Text for Slider About Phonebook"),
      URL: "https://andreygoit.github.io/goit-react-hw-08-phonebook",
      year: "2022",
      liveLink: "https://andreygoit.github.io/goit-react-hw-08-phonebook",
      link: "https://github.com/AndreyGOIT/goit-react-hw-08-phonebook",
    },
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
      text: t("Text for Slider About Movies"),
      URL: "https://andreygoit.github.io/goit-react-hw-05-movies/",
      year: "2022",
      liveLink: "http://andreygoit.github.io/goit-react-hw-05-movies/",
      link: "https://github.com/AndreyGOIT/goit-react-hw-05-movies",
    }
    // Repeat similar structure for other projects
  ];

  const [activeIndex, setActiveIndex] = useState(0); // State to track active project index
  const totalItems = items.length; // Total number of items

  // Function to handle previous slide
  const handlePrev = () => {
    // setActiveIndex(Math.max(activeIndex - 1, 0));
    setActiveIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  // Function to handle next slide
  const handleNext = () => {
    // setActiveIndex(Math.min(activeIndex + 1, totalItems - 1));
    setActiveIndex(prevIndex => Math.min(prevIndex + 1, totalItems - 1));
  };

  // Get the currently active item
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
          tab: "768px",
          tabMax: "960px",
          desk: "1280px",
        }}
        h={"100%"}
        mx={"auto"}
      >
        {/* Left arrow button */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={2}
          top={"50%"}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={handlePrev}
        >
          <BiLeftArrowAlt color={"white"} size="40px" />
        </IconButton>

        {/* Slide content */}
        <Box as="div" bg={"gray.700"} className={`slide active`}>
          {/* Project example iframe */}
          <div className="slideContent slideFrame">
            <iframe
              width="100%"
              height="100%"
              src={currentItem.URL}
              title={currentItem.title}
            ></iframe>
          </div>

          {/* Project details */}
          <div className="slideContent">
            {/* Project title */}
            <Flex
              as={"div"}
              justifyContent={"center"}
              alignItems={"center"}
              backgroundColor={"white"}
              borderRadius={6}
              h={"50px"}
              w={{
                base: "150px",
                tab: "300px",
                tabMax: "400px",
                desk: "500px",
              }}
              py={"45px"}
              mb={{ base: "5px", tab: "15px" }}
            >
              <Text
                as={"h3"}
                fontSize={{ base: "27px", md: "34px", lg: "38px" }}
                lineHeight={"1.3"}
                fontWeight={"700"}
                color={"black"}
              >
                {currentItem.title}
              </Text>
            </Flex>

            {/* Technologies used */}
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
                {t("Slider Technologies")}
              </Text>{" "}
              {currentItem.technologies.map((tech, idx) => (
                // Map over technologies and display icons
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

            {/* Project description */}
            <Text
              as="p"
              fontSize={{ base: "12px", tab: "14px", desk: "16px" }}
              color="white"
            >
              <b style={{ fontSize: "1.15em" }}>{t("Slider About")}</b>
              {currentItem.text}
            </Text>

            {/* Project year */}
            <Text
              as="p"
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              color="white"
            >
              <b>{t("Slider Year")}</b>
              {currentItem.year}
            </Text>

            {/* Project links */}
            <Flex gap={2} align={"baseline"}>
              <Text
                as="p"
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                color="white"
              >
                <b>{t("Slider Links")}</b>
              </Text>
              {/* Live link */}
              <Link as="a" isExternal href={currentItem.liveLink} color="white">
                live <ExternalLinkIcon boxSize={3.5} mx="2px" />
              </Link>
              <Text as="p" fontSize="lg" color="white">
                |
              </Text>
              {/* GitHub link */}
              <Link as="a" isExternal href={currentItem.link} color="white">
                github <ExternalLinkIcon boxSize={3.5} mx="2px" />
              </Link>
            </Flex>
          </div>
        </Box>

        {/* Right arrow button */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={2}
          top={"50%"}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={handleNext}
        >
          <BiRightArrowAlt color={"white"} size="40px" />
        </IconButton>
      </Flex>
    </Box>
  );
};
