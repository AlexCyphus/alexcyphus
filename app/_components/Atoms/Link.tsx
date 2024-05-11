import { Link as ChakraLink } from "@chakra-ui/react";

interface LinkProps {
  children: React.ReactNode;
  to: string;
}

const Link: React.FC<LinkProps> = ({ children, to }) => (
  <ChakraLink
    bg={"gray.200"}
    py={0.5}
    href={to}
    px={1}
    target="_blank"
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
