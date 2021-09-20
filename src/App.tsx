import "./App.css";
import "./Reset.css";

import { ChakraProvider, Button } from "@chakra-ui/react";

import theme from "./theme/theme";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <h1>React review</h1>
      <Button colorScheme="teal">ボタン</Button>
    </ChakraProvider>
  );
}
