import React from "react";
import { Box, Button, Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/core';
import { GoIssueOpened, GoRepoForked, GoStar } from 'react-icons/all';

export function Repo(props) {
  const { isListView = false } = props;

  return (
    <Flex borderWidth={1} bg="white" p="15px" rounded="5px" alignItems="center">
      <Flex flex={1} flexDir="column">
        {!isListView && (
          <Flex mb="15px">
            <Image
              src="https://avatars2.githubusercontent.com/u/4921183?s=460&u=12416fa01eb7f7d28df420f773dab31e6279c75b&v=4"
              w={"35px"}
              h={"35px"}
              rounded="5px"
            />
            <Box ml="10px">
              <Heading fontSize="16px">kamranahmedse</Heading>
              <Text fontSize="13px">View profile</Text>
            </Box>
          </Flex>
        )}

        <Box mb="15px">
          <Box mb="10px">
            <Flex fontSize="19px" fontWeight={700} color="purple.700" mb="3px">
              {isListView && (
                <>
                  <Text
                    as="a"
                    href="https://github.com/kamranahmedse"
                    target="_blank"
                  >
                    kamranahmedse
                  </Text>
                  &nbsp;/&nbsp;
                </>
              )}
              <Text
                as="a"
                href="https://github.com/kamranahmedse/githunt"
                target="_blank"
              >
                githunt
              </Text>
            </Flex>
            <Text fontSize="14px" color="gray.600">
              Built by &middot;{" "}
              <Link
                fontWeight={600}
                href="https://github.com/kamranahmedse"
                target="_blank"
              >
                kamranahmedse
              </Link>{" "}
              &middot; May 29, 2020
            </Text>
          </Box>

          <Text fontSize="14px" color="gray.900">
            Hunt the most starred projects on any date on GitHub
          </Text>
        </Box>

        <Stack isInline spacing="10px">
          <Button
            as="a"
            cursor="pointer"
            leftIcon={GoStar}
            variant="link"
            fontSize="13px"
            iconSpacing="4px"
            _hover={{ textDecor: "none" }}
          >
            3487
          </Button>
          <Button
            as="a"
            cursor="pointer"
            leftIcon={GoRepoForked}
            variant="link"
            fontSize="13px"
            iconSpacing="4px"
            _hover={{ textDecor: "none" }}
          >
            34
          </Button>
          <Button
            as="a"
            cursor="pointer"
            leftIcon={GoIssueOpened}
            variant="link"
            fontSize="13px"
            iconSpacing="4px"
            _hover={{ textDecor: "none" }}
          >
            343
          </Button>
        </Stack>
      </Flex>
      {isListView && (
        <Image
          src="https://avatars2.githubusercontent.com/u/4921183?s=460&u=12416fa01eb7f7d28df420f773dab31e6279c75b&v=4"
          w={"105px"}
          h={"105px"}
          rounded="100%"
        />
      )}
    </Flex>
  );
}
