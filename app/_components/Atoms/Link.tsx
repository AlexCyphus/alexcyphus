import { Link as ChakraLink } from "@chakra-ui/react";

interface LinkProps {
  children: React.ReactNode;
  to: string;
}

const Link: React.FC<LinkProps> = ({ children }) => (
  <ChakraLink
    bg={"gray.200"}
    py={0.5}
    px={1}
    rounded={2}
    _hover={{
      bg: "black",
      color: "white",
    }}
  >
    {children}
  </ChakraLink>
);

export default Link;
