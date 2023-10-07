import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
  AccordionPanel,
  AccordionIcon,
  Text,
} from "@chakra-ui/react";

const WhatIBring = () => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Text as="b" fontSize="18px" color="white">
                Diverse Skill Set:
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          currently connected and Proficiency in both front-end and back-end
          technologies, enabling me to develop end-to-end solutions.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Text as="b" fontSize="18px" color="white">
                Team Player:
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Experienced in collaborative team projects, ensuring smooth
          communication and effective teamwork.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Text as="b" fontSize="18px" color="white">
                Problem Solver:
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Adept at identifying problems and creating elegant solutions, I thrive
          under challenging situations.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Text as="b" fontSize="18px" color="white">
                Innovator:
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Always exploring new technologies and methodologies to keep my skills
          up-to-date and relevant.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
export default WhatIBring;
