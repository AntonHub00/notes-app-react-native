import React from 'react';
import { HamburgerIcon, HStack, IconButton, Input } from 'native-base';
import AvatarComponent from './AvatarComponent';

const TopBarComponent: React.FC = () => {
  return (
    <HStack bg="#00BCD4" h="12" space="2" p="3" alignItems="center">
      <Input
        flex={1}
        h="10"
        placeholder="Search Notes"
        bg="#fff"
        borderRadius="100"
        InputLeftElement={
          <IconButton icon={<HamburgerIcon size="sm" color="black" />} />
        }
        InputRightElement={
          <IconButton
            icon={
              <AvatarComponent
                size="xs"
                uri="https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg"
              />
            }
          />
        }
      />
    </HStack>
  );
};

export default TopBarComponent;
