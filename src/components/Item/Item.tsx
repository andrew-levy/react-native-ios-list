import React, { ReactNode, useContext } from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { styles, getItemStyles } from '../../styles';
import { ListStyleContext } from '../List/List';
import { PressableItem } from '../PressableItem';

export type ItemProps = {
  leading?: any;
  content?: any;
  trailing?: any;
  divider?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  children?: ReactNode;
};

export const Item = ({
  leading,
  content,
  trailing,
  divider,
  style,
  onPress,
  children,
}: ItemProps) => {
  const listStyle = useContext(ListStyleContext);
  let itemContent = (
    <>
      <View style={[getItemStyles(listStyle), style]}>
        <View style={styles.row}>
          <View style={styles.leading}>{leading}</View>
          {content ? (
            <Text style={styles.content}>{content}</Text>
          ) : (
            <View style={styles.content}>{children}</View>
          )}
          <View style={styles.trailing}>{trailing}</View>
        </View>
      </View>
      {divider && <View style={styles.divider} />}
    </>
  );
  if (onPress) {
    itemContent = (
      <PressableItem onPress={onPress}>{itemContent}</PressableItem>
    );
  }
  return itemContent;
};
