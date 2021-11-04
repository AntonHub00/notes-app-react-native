import { Avatar } from 'native-base';
import React from 'react';

interface Props {
  size: string;
  uri: string;
}

const AvatarComponent: React.FC<Props> = ({ size, uri }) => {
  return <Avatar size={size} source={{ uri }} />;
};

export default AvatarComponent;
