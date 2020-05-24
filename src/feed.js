import React from 'react';
import { Box, Flex, SimpleGrid, Button } from '@chakra-ui/core';
import { PageHeader } from './components/page-header';
import { GroupTitle } from './components/group-title';
import { Filters } from './components/filters';
import { Repo } from './components/repo';

export function Feed() {
  return <Box maxWidth="1200px" mx="auto">
    <PageHeader />
    
    <Flex alignItems='center' justifyContent='space-between' mb='25px'>
      <GroupTitle />
      <Filters />
    </Flex>
    
    <SimpleGrid columns={3} spacing='15px'>
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
    </SimpleGrid>
  
    <Flex alignItems="center" justifyContent="center" my="20px">
      <Button variantColor="blue">Load next group</Button>
    </Flex>
  </Box>;
}
