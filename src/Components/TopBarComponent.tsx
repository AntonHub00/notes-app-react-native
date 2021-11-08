import React from 'react';
import { Box, HamburgerIcon, HStack, IconButton, Input } from 'native-base';
import AvatarComponent from './AvatarComponent';
import { updateSearchTerm } from '../store/stores/notesSlice';
import { useAppDispatch } from '../store/hooks';

const CustomIconButtonComponent: React.FC<{
  icon: JSX.Element;
  onPressAction?: () => void;
}> = ({ icon, onPressAction }) => (
  <IconButton
    borderRadius="100"
    _pressed={{ bgColor: '#00838f80' }}
    icon={icon}
    onPress={onPressAction}
  />
);

const TopBarComponent: React.FC<{ onProfileAvatarPress: () => void }> = ({
  onProfileAvatarPress,
}) => {
  const actionsDispatcher = useAppDispatch();

  return (
    <HStack bg="#00838f" h="16" space="2" p="2" alignItems="center">
      <Box
        flex={1}
        justifyContent="center"
        h="12"
        bg="white"
        borderRadius="100"
      >
        <Input
          fontSize="sm"
          borderWidth="0"
          selectionColor="#99999980"
          placeholder="Search Notes"
          onChangeText={text =>
            actionsDispatcher(updateSearchTerm({ searchTerm: text }))
          }
          InputLeftElement={
            <CustomIconButtonComponent
              icon={<HamburgerIcon size="md" color="black" />}
            />
          }
          InputRightElement={
            <CustomIconButtonComponent
              icon={
                <AvatarComponent
                  size="sm"
                  uri="https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg"
                />
              }
              onPressAction={onProfileAvatarPress}
            />
          }
        />
      </Box>
    </HStack>
  );
};

export default TopBarComponent;
