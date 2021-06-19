import React, { useContext } from 'react';
import { View } from 'react-native';
import { getItemStyles, styles } from '../styles';
import { ListStyleContext } from './List';

export type ItemProps = {
  divider?: boolean;
  children: React.ReactElement<any> | Array<React.ReactElement<any>>;
};

export const Item = ({ divider, children }: ItemProps) => {
  const listStyle = useContext(ListStyleContext);
  return (
    <>
      <View style={getItemStyles(listStyle)}>{children}</View>
      {divider && <View style={styles.divider} />}
    </>
  );
};
