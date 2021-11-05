import { Button } from 'native-base';
import React from 'react';

interface Props {
  text: string;
  onPressAction: (...args: any[]) => any;
  extraProps?: Object;
}

const BaseButtonComponent: React.FC<Props> = ({
  text,
  onPressAction,
  ...extraProps
}) => {
  return (
    <Button
      bgColor="#00838f"
      _pressed={{ bgColor: '#005662' }}
      onPress={onPressAction}
      {...extraProps}
    >
      {text}
    </Button>
  );
};

export default BaseButtonComponent;
