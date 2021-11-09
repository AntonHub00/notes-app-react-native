import React from 'react';
import { Avatar } from 'native-base';
import { IAvatarProps } from 'native-base/lib/typescript/components/composites/Avatar';

interface Props {
  size: IAvatarProps['size'];
  source: IAvatarProps['source'];
}

const AvatarComponent: React.FC<Props> = ({ size, source }) => {
  return <Avatar size={size} source={source} />;
};

export default AvatarComponent;
