import React from 'react';
import { Actionsheet, HStack, Icon, Text } from 'native-base';
import { Path } from 'react-native-svg';

interface Props {
  sheetIsOpen: boolean;
  closeSheet: () => void;
  onDelete: () => void;
}

const NoteActionDialogComponent: React.FC<Props> = ({
  sheetIsOpen,
  closeSheet,
  onDelete,
}) => {
  return (
    <Actionsheet isOpen={sheetIsOpen} onClose={closeSheet}>
      <Actionsheet.Content>
        <HStack justifyContent="center">
          <Text fontSize="md" fontWeight="bold" color="#555">
            Note
          </Text>
        </HStack>
        <Actionsheet.Item
          startIcon={
            <Icon viewBox="0 0 24 24" size="sm">
              <Path d="M0 0h24v24H0V0z" fill="none" />
              <Path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
            </Icon>
          }
          onPress={() => {
            onDelete();
            closeSheet();
          }}
        >
          Delete
        </Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default NoteActionDialogComponent;
