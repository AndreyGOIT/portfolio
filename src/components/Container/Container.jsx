import { ContainerBox } from "./ContStyles";

// Container component with props
export const Container = ({ children, flex }) => {
  return <ContainerBox flex={flex}>{children}</ContainerBox>;
};
