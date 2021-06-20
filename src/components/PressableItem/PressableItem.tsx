import React, { ReactNode, useContext } from 'react';
import {
  View,
  TouchableHighlight,
  GestureResponderEvent,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { getItemStyles, styles } from '../../styles';
import { ListStyleContext } from '../List/List';

export type PressableItemProps = {
  /* A function to execute on press */
  onPress?: (event: GestureResponderEvent) => void;
  /* Show divider */
  divider?: boolean;
  highlightColor: string;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
};

export const PressableItem = ({
  children,
  onPress,
  highlightColor = '#e5e5ea',
  divider,
  style,
}: PressableItemProps) => {
  const listStyle = useContext(ListStyleContext);
  return (
    <>
      <TouchableHighlight
        underlayColor={highlightColor}
        onPress={onPress}
        style={[getItemStyles(listStyle), style]}
      >
        {children}
      </TouchableHighlight>
      {divider && <View style={styles.divider} />}
    </>
  );
};
