import { Box } from "@chakra-ui/react";

// ContainerBox component with props
export const ContainerBox = ({ children, flex }) => {
  return (
    <Box
      as={"div"} // Render as a div element
      display={flex && "flex"} // Conditionally render flex display if flex prop is true
      gap={flex && "45px"} // Conditionally set gap between flex items if flex prop is true
      flexWrap={flex && "wrap"} // Conditionally wrap flex items if flex prop is true
      alignItems={flex && "start"} // Conditionally align flex items if flex prop is true
      flexDirection={flex && "column"} // Conditionally set flex direction if flex prop is true
      w={{ // Set width based on breakpoints
        base: "100%", // Full width on small screens
        mobMax: "480px", // Maximum width on mobile devices
        tab: "768px", // Width on tablet devices
        tabMax: "960px", // Maximum width on tablets
        desk: "1280px", // Width on desktop devices
      }}
      px={{ // Set horizontal padding based on breakpoints
        base: "15px", // Padding on small screens
        tab: "20px", // Padding on tablet devices
        desk: "0px", // No padding on desktop devices
      }}
      mx={"auto"} // Center horizontally by setting margin to auto
    >
      {children} {/* Render children components */}
    </Box>
  );
};
