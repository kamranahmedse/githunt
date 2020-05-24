import React from "react";
import { Box, Button, Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/core';
import { GoIssueOpened, GoRepoForked, GoStar } from 'react-icons/all';

export function Repo() {
  return (
    <Box borderWidth={1} bg='white' p='15px' rounded='5px'>
      <Flex mb='20px'>
        <Image
          src='https://avatars2.githubusercontent.com/u/4921183?s=460&u=12416fa01eb7f7d28df420f773dab31e6279c75b&v=4'
          w={'35px'}
          h={'35px'}
          rounded='5px'
        />
        <Box ml='10px'>
          <Heading fontSize='16px'>kamranahmedse</Heading>
          <Text fontSize='13px'>View profile</Text>
        </Box>
      </Flex>
      
      <Box mb='20px'>
        <Box mb='10px'>
          <Heading mb='3px' fontSize='19px' as='a' href='https://github.com/kamranahmedse/githunt' target='_blank' color='purple.700'>githunt</Heading>
          <Text fontSize='14px' color='gray.600'>Built by &middot; <Link fontWeight={600} href='https://github.com/kamranahmedse' target='_blank'>kamranahmedse</Link> &middot; May 29, 2020</Text>
        </Box>
        
        <Text fontSize='14px' color='gray.900'>Hunt the most starred projects on any date on GitHub</Text>
      </Box>
      
      <Stack isInline spacing='10px'>
        <Button as='a' cursor='pointer' leftIcon={GoStar} variant='link' fontSize='14px' iconSpacing='4px' _hover={{textDecor: 'none'}}>3487</Button>
        <Button as='a' cursor='pointer' leftIcon={GoRepoForked} variant='link' fontSize='14px' iconSpacing='4px' _hover={{textDecor: 'none'}}>34</Button>
        <Button as='a' cursor='pointer' leftIcon={GoIssueOpened} variant='link' fontSize='14px' iconSpacing='4px' _hover={{textDecor: 'none'}}>343</Button>
      </Stack>
    </Box>
  );
}