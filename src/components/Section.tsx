import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { getContainerStyles, getHeaderStyles } from '../styles';
import { ListStyleContext } from './List';

export type SectionProps = {
  header?: string;
  children: React.ReactElement<any> | Array<React.ReactElement<any>>;
};

export const Section = ({ header, children }: SectionProps) => {
  const listStyle = useContext(ListStyleContext);
  return (
    <>
      {header && <Text style={getHeaderStyles(listStyle)}>{header}</Text>}
      <View style={getContainerStyles(listStyle)}>{children}</View>
    </>
  );
};
