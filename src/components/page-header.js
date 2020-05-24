import React from 'react';
import { Button, Flex, Stack } from '@chakra-ui/core';
import { FaGithub, FaChrome, FaTwitter } from 'react-icons/fa';
import { Brand } from './brand';

export function PageHeader() {
  return (
    <Flex justifyContent='space-between' alignItems='center' mb='25px'>
      <Brand />
      <Stack isInline>
        <Button leftIcon={FaGithub}>View Source</Button>
        <Button leftIcon={FaChrome} variantColor='red' >Use Extension</Button>
        <Button leftIcon={FaTwitter} variantColor='purple' >Tweet</Button>
      </Stack>
    </Flex>
  );
}