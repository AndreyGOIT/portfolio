import { ContainerBox } from "./ContStyles";

export const Container = ({ children, flex }) => {
  return <ContainerBox flex={flex}>{children}</ContainerBox>;
};
