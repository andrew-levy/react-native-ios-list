import React, { ReactNode, useContext } from 'react';
import { TouchableHighlight, View } from 'react-native';
import { styles, getItemStyles, getDividerStyles, colors } from '../../styles';
import { ListTypeContext } from '../List/List';

export type ItemProps = {
  leading?: any;
  trailing?: any;
  divider?: boolean;
  onPress?: () => void;
  children?: ReactNode;
};

export const Item = ({
  leading,
  trailing,
  divider,
  onPress,
  children,
}: ItemProps) => {
  const { listType, sideBar } = useContext(ListTypeContext);

  let itemContent = (
    <>
      <View style={getItemStyles(listType)}>
        <View style={styles.row}>
          <View style={styles.leading}>{leading}</View>
          <View style={styles.content}>{children}</View>
          <View style={styles.trailing}>{trailing}</View>
        </View>
      </View>
      {divider && <View style={getDividerStyles(sideBar)} />}
    </>
  );
  if (onPress) {
    return (
      <TouchableHighlight
        underlayColor={colors.highlightColor}
        onPress={onPress}
      >
        {itemContent}
      </TouchableHighlight>
    );
  }
  return itemContent;
};
