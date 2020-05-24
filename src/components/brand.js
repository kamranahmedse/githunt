import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/core";

export function Brand() {
  return (
    <Flex alignItems="center">
      <Image src="/logo.svg" />
      <Box ml="10px">
        <Heading fontSize="24px">GitHunt</Heading>
        <Text color="gray.500">Most starred projects on GitHub</Text>
      </Box>
    </Flex>
  );
}
