import React, { ReactNode, useContext } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { getItemStyles, styles } from '../../styles';
import { ListStyleContext } from '../List/List';

export type ItemProps = {
  divider?: boolean;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
};

export const Item = ({ divider, style, children }: ItemProps) => {
  const listStyle = useContext(ListStyleContext);
  return (
    <>
      <View style={[getItemStyles(listStyle), style]}>{children}</View>
      {divider && <View style={styles.divider} />}
    </>
  );
};
