import React, { useState } from 'react';
import { Box, Button, Flex, SimpleGrid } from '@chakra-ui/core';
import { Repo } from './components/repo';
import { Filters } from './components/filters';
import { GroupTitle } from './components/group-title';
import { PageHeader } from './components/page-header';

export function Feed() {
  const [viewType, setViewType] = useState("grid");
  const [dateJump, setDateJump] = useState("day");
  const [language, setLanguage] = useState();

  return (
    <Box maxWidth="1200px" mx="auto">
      <PageHeader />

      <Flex alignItems="center" justifyContent="space-between" mb="25px">
        <GroupTitle />
        <Filters
          viewType={viewType}
          onViewChange={setViewType}
          dateJump={dateJump}
          onDateJumpChange={setDateJump}
          language={language}
          onLanguageChange={setLanguage}
        />
      </Flex>

      <SimpleGrid columns={viewType === "list" ? 1 : 3} spacing="15px">
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
      </SimpleGrid>

      <Flex alignItems="center" justifyContent="center" my="20px">
        <Button variantColor="blue">Load next group</Button>
      </Flex>
    </Box>
  );
}
