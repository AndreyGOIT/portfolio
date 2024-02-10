import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
  AccordionPanel,
  AccordionIcon,
  Text,
} from "@chakra-ui/react"; // Import necessary components from Chakra UI library

import { useTranslation } from "react-i18next"; // Import useTranslation hook for translation

// WhatIBring component
const WhatIBring = () => {
  const { t } = useTranslation(); // Use translation hook to access translations

  return (
    <Accordion defaultIndex={[0]} allowMultiple> {/* Accordion component with defaultIndex set to 0 and allowMultiple set to true */}
      {/* AccordionItem 1 */}
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Text as="b" fontSize="18px" color="white">
                {t("Diverse Skill Set")} {/* Translate text for 'Diverse Skill Set' */}
              </Text>
            </Box>
            <AccordionIcon /> {/* AccordionIcon component */}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {t("Text for Diverse Skill Set")} {/* Translate text for 'Text for Diverse Skill Set' */}
        </AccordionPanel>
      </AccordionItem>

      {/* AccordionItem 2 */}
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Text as="b" fontSize="18px" color="white">
                {t("Team Player")} {/* Translate text for 'Team Player' */}
              </Text>
            </Box>
            <AccordionIcon /> {/* AccordionIcon component */}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{t("Text for Team Player")}</AccordionPanel> {/* Translate text for 'Text for Team Player' */}
      </AccordionItem>

      {/* AccordionItem 3 */}
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Text as="b" fontSize="18px" color="white">
                {t("Problem Solver")} {/* Translate text for 'Problem Solver' */}
              </Text>
            </Box>
            <AccordionIcon /> {/* AccordionIcon component */}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{t("Text for Problem Solver")}</AccordionPanel> {/* Translate text for 'Text for Problem Solver' */}
      </AccordionItem>

      {/* AccordionItem 4 */}
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Text as="b" fontSize="18px" color="white">
                {t("Innovator")} {/* Translate text for 'Innovator' */}
              </Text>
            </Box>
            <AccordionIcon /> {/* AccordionIcon component */}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{t("Text for Innovator")}</AccordionPanel> {/* Translate text for 'Text for Innovator' */}
      </AccordionItem>
    </Accordion>
  );
};

export default WhatIBring; // Export WhatIBring component
