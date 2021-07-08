import React, { ReactNode } from 'react';
import { TouchableHighlight, GestureResponderEvent } from 'react-native';

export type PressableItemProps = {
  onPress?: (event: GestureResponderEvent) => void;
  highlightColor?: string;
  children?: ReactNode;
};

export const PressableItem = ({
  children,
  onPress,
  highlightColor = '#e5e5ea',
}: PressableItemProps) => {
  return (
    <TouchableHighlight underlayColor={highlightColor} onPress={onPress}>
      {children}
    </TouchableHighlight>
  );
};
