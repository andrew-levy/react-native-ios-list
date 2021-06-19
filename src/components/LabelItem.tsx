import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

export type LabelItemProps = {
  /* Label icon */
  icon: any;
  /* Optional label text */
  text?: string;
  /* Optional trailing component */
  trailing?: any;
  divider?: boolean;
  children: React.ReactElement<any> | Array<React.ReactElement<any>>;
};

export const LabelItem = ({
  icon,
  text,
  trailing,
  divider,
  children,
}: LabelItemProps) => {
  return (
    <View style={{}}>
      {/* Flex for trailing and content - spacebetween */}
      <View>
        {/* icon */}
        <View>{icon}</View>
        {/* text/content */}
        {text ? <Text>{text}</Text> : <View>{children}</View>}
      </View>
      {/* trailing (optional) */}
      <View>{trailing}</View>
    </View>
  );
};
