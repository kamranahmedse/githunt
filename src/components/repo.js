import React from "react";
import moment from "moment";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/core";
import { GoIssueOpened, GoRepoForked, GoStar } from "react-icons/all";

export function Repo(props) {
  const { isListView = false, repo } = props;
  
  return (
    <Flex borderWidth={1} bg="white" p="15px" rounded="5px" alignItems="center">
      <Flex flex={1} flexDir="column">
        {!isListView && (
          <Flex mb="15px">
            <Image
              src={repo.owner.avatar_url}
              w={"35px"}
              h={"35px"}
              rounded="5px"
            />
            <Box ml="10px">
              <Heading fontSize="16px">{repo.owner.login}</Heading>
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
                    href={ repo.owner.html_url }
                    target="_blank"
                  >
                    {repo.owner.login}
                  </Text>
                  &nbsp;/&nbsp;
                </>
              )}
              <Text
                as="a"
                href={ repo.html_url }
                target="_blank"
              >
                {repo.name}
              </Text>
            </Flex>
            <Text fontSize="14px" color="gray.600">
              Built by &middot;{" "}
              <Link
                fontWeight={600}
                href={ repo.owner.html_url }
                target="_blank"
              >
                {repo.owner.login}
              </Link>{" "}
              &middot; {moment(repo.created_at).format("MMMM D, YYYY")}
            </Text>
          </Box>
          
          <Text fontSize="14px" color="gray.900">
            {repo.description}
          </Text>
        </Box>
        
        <Stack isInline spacing="10px">
          <Button
            as="a"
            href={`${repo.html_url}/stargazers`}
            cursor="pointer"
            leftIcon={GoStar}
            variant="link"
            fontSize="13px"
            iconSpacing="4px"
            target="_blank"
            _hover={{ textDecor: "none" }}
          >
            {repo.stargazers_count}
          </Button>
          <Button
            as="a"
            cursor="pointer"
            href={`${repo.html_url}/network/members`}
            leftIcon={GoRepoForked}
            variant="link"
            fontSize="13px"
            iconSpacing="4px"
            target="_blank"
            _hover={{ textDecor: "none" }}
          >
            34
          </Button>
          <Button
            as="a"
            cursor="pointer"
            href={`${repo.html_url}/issues`}
            target="_blank"
            leftIcon={GoIssueOpened}
            variant="link"
            fontSize="13px"
            iconSpacing="4px"
            _hover={{ textDecor: "none" }}
          >
            {repo.open_issues_count}
          </Button>
        </Stack>
      </Flex>
      {isListView && (
        <Image
          src={ repo.owner.avatar_url}
          w={"105px"}
          h={"105px"}
          rounded="100%"
        />
      )}
    </Flex>
  );
}