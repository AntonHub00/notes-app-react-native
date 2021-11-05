import React from 'react';
import { Avatar } from 'native-base';
import { IAvatarProps } from 'native-base/lib/typescript/components/composites/Avatar';
import { ImageURISource } from 'react-native';

interface Props {
  size: IAvatarProps['size'];
  uri: ImageURISource['uri'];
}

const AvatarComponent: React.FC<Props> = ({ size, uri }) => {
  return <Avatar size={size} source={{ uri }} />;
};

export default AvatarComponent;
