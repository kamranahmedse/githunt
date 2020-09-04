import React from 'react';
import moment from 'moment';
import { Text } from '@chakra-ui/core';

export function GroupTitle({ startDate, endDate }) {
  if (!startDate || !endDate) {
    return null;
  }
  
  const startMoment = moment(startDate)
  const endMoment = moment(endDate);
  
  return (
    <Text fontSize="24px" fontWeight={700}>
      { startMoment.fromNow() }{" "}
      <Text
        fontSize="15px"
        fontWeight={500}
        color="gray.500"
        ml={[0, 0, 0, '5px']}
        as="span"
        d={['none', 'none', 'inline', 'inline', 'inline']}
      >
        {startMoment.format("MMMM D, YYYY")} – {endMoment.format("MMMM D, YYYY")}
      </Text>
    </Text>
  );
}
