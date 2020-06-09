import React, { useState } from "react";
import { Box, Flex, SimpleGrid, Button } from "@chakra-ui/core";
import { PageHeader } from "./components/page-header";
import { GroupTitle } from "./components/group-title";
import { Filters } from "./components/filters";
import { Repo } from "./components/repo";

export function Feed() {
  const [viewType, setViewType] = useState("grid");
  const [dateGroup, setDateGroup] = useState("daily");
  const [language, setLanguage] = useState();

  return (
    <Box maxWidth="1200px" mx="auto">
      <PageHeader />

      <Flex alignItems="center" justifyContent="space-between" mb="25px">
        <GroupTitle />
        <Filters
          viewType={viewType}
          onViewChange={setViewType}
          dateGroup={dateGroup}
          onDateGroupChange={setDateGroup}
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
