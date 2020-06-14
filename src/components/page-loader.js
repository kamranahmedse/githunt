import { Flex, Spinner } from "@chakra-ui/core";
import React from "react";

export function PageLoader() {
  return (
    <Flex
      position="fixed"
      left={0}
      right={0}
      bottom={0}
      top={0}
      alignItems="center"
      justifyContent="center"
      bg="white"
      zIndex={999}
    >
      <Spinner thickness="4px" color="gray.400" />
    </Flex>
  );
}
