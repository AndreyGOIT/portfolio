import { Box } from "@chakra-ui/react";

export const ContainerBox = ({ children, flex }) => {
  return (
    <Box
      as={"div"}
      display={flex && "flex"}
      gap={flex && "45px"}
      flexWrap={flex && "wrap"}
      alignItems={flex && "start"}
      flexDirection={flex && "column"}
      w={{
        base: "100%",
        mobMax: "480px",
        tab: "768px",
        tabMax: "960px",
        desk: "1280px",
      }}
      px={{
        base: "15px",
        tab: "20px",
        desk: "0px",
      }}
      mx={"auto"}
    >
      {children}
    </Box>
  );
};
