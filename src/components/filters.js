import React from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList, Select, Stack } from '@chakra-ui/core';
import { FaList, FaTable } from 'react-icons/fa';

import languages from '../data/languages';

export function Filters() {
  return (
    <Stack isInline>
      <Select>
        {languages.map((language) => (
          <option value={language.value}>{language.label}</option>
        ))}
      </Select>

      <Menu>
        <MenuButton as={Button} bg='white' borderWidth={1} px='40px' fontWeight={400} leftIcon='calendar'>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem as="a" href="#">
            Attend a Workshop
          </MenuItem>
        </MenuList>
      </Menu>
      
      <Stack isInline spacing={0} borderWidth={1} bg='white' rounded='5px' alignItems='center' ml='10px'>
        <Button h='100%' fontWeight={400} roundedRight={0} leftIcon={FaTable} bg='white'>Grid</Button>
        <Button h='100%' fontWeight={400} roundedLeft={0} leftIcon={FaList} bg='white'>List</Button>
      </Stack>
    </Stack>
  );
}
