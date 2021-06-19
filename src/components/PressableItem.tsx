import React, { useContext } from 'react';
import { View, TouchableHighlight, GestureResponderEvent } from 'react-native';
import { getItemStyles, styles } from '../styles';
import { ListStyleContext } from './List';

export type PressableItemProps = {
  /* A function to execute on press */
  onPress?: (event: GestureResponderEvent) => void;
  /* Show divider */
  divider?: boolean;
  children: React.ReactElement<any> | Array<React.ReactElement<any>>;
};

export const PressableItem = ({
  children,
  onPress,
  divider,
}: PressableItemProps) => {
  const listStyle = useContext(ListStyleContext);
  return (
    <>
      <TouchableHighlight
        underlayColor='#e5e5ea'
        onPress={onPress}
        style={getItemStyles(listStyle)}
      >
        {children}
      </TouchableHighlight>
      {divider && <View style={styles.divider} />}
    </>
  );
};
