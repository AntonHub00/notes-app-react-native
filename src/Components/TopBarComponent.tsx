import React from 'react';
import { Box, HamburgerIcon, HStack, IconButton, Input } from 'native-base';
import AvatarComponent from './AvatarComponent';

const CustomIconButtonComponent: React.FC<{ icon: JSX.Element }> = ({
  icon,
}) => (
  <IconButton
    borderRadius="100"
    _pressed={{ bgColor: '#00838f80' }}
    icon={icon}
  />
);

const TopBarComponent: React.FC = () => {
  return (
    <HStack bg="#00838f" h="12" space="2" p="3" alignItems="center">
      <Box flex={1} h="10" bg="white" borderRadius="100">
        <Input
          borderWidth="0"
          selectionColor="#99999980"
          placeholder="Search Notes"
          InputLeftElement={
            <CustomIconButtonComponent
              icon={<HamburgerIcon size="sm" color="black" />}
            />
          }
          InputRightElement={
            <CustomIconButtonComponent
              icon={
                <AvatarComponent
                  size="xs"
                  uri="https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg"
                />
              }
            />
          }
        />
      </Box>
    </HStack>
  );
};

export default TopBarComponent;
