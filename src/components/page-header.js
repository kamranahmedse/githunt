import React from "react";
import { Button, Flex, Stack } from "@chakra-ui/core";
import { FaChrome, FaGithub, FaTwitter } from "react-icons/fa";
import { Brand } from "./brand";

export function PageHeader() {
  return (
    <Flex justifyContent="space-between" alignItems="center" mb="25px">
      <Brand />
      <Stack isInline d={['none', 'none', 'flex', 'flex']}>
        <Button
          as="a"
          href="https://github.com/kamranahmedse/githunt"
          target="_blank"
          leftIcon={FaGithub}
          bg="gray.700"
          color="white"
          _hover={{ bg: "gray.900" }}
        >
          View Source
        </Button>
        <Button
          as="a"
          href="https://chrome.google.com/webstore/detail/githunt/khpcnaokfebphakjgdgpinmglconplhp"
          target="_blank"
          leftIcon={FaChrome}
          variantColor="red"
        >
          Use Extension
        </Button>
        <Button
          as="a"
          href="https://twitter.com/intent/tweet?text=GitHunt%20%E2%80%93%20Most%20starred%20projects%20on%20Github%20by%20@kamranahmedse%20https://github.com/kamranahmedse/githunt"
          target="_blank"
          leftIcon={FaTwitter}
          variantColor="purple"
        >
          Tweet
        </Button>
      </Stack>
    </Flex>
  );
}
