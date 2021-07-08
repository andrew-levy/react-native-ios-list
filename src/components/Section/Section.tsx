import React, { ReactNode, useContext } from 'react';
import { View, Text, ViewStyle, StyleProp } from 'react-native';
import { getContainerStyles, getHeaderStyles } from '../../styles';
import { ListStyleContext } from '../List/List';

export type SectionProps = {
  header?: string;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
};

export const Section = ({ header, style, children }: SectionProps) => {
  const listStyle = useContext(ListStyleContext);
  return (
    <>
      {header && <Text style={getHeaderStyles(listStyle)}>{header}</Text>}
      <View style={getContainerStyles(listStyle)}>{children}</View>
    </>
  );
};
