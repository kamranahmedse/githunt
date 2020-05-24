import React from 'react';
import { Text } from '@chakra-ui/core';

export function GroupTitle() {
  return (
    <Text fontSize="24px" fontWeight={700}>
      This week{" "}
      <Text
        fontSize="15px"
        fontWeight={500}
        color="gray.500"
        ml="5px"
        as="span"
      >
        May 16, 2020 – May 23, 2020
      </Text>
    </Text>
  );
}
