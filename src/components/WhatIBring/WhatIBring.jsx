import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
  AccordionPanel,
  AccordionIcon,
  Text,
} from "@chakra-ui/react";

import { useTranslation } from "react-i18next";

const WhatIBring = () => {
  const { t } = useTranslation();

  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Text as="b" fontSize="18px" color="white">
                {t("Diverse Skill Set")}
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {t("Text for Diverse Skill Set")}
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Text as="b" fontSize="18px" color="white">
                {t("Team Player")}
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{t("Text for Team Player")}</AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Text as="b" fontSize="18px" color="white">
                {t("Problem Solver")}
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{t("Text for Problem Solver")}</AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Text as="b" fontSize="18px" color="white">
                {t("Innovator")}
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{t("Text for Innovator")}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
export default WhatIBring;
