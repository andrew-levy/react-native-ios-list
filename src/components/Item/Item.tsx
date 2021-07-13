import React, { PropsWithChildren, ReactElement, useContext } from 'react';
import { TouchableHighlight, View } from 'react-native';
import { styles, getItemStyles, getDividerStyles, colors } from '../../styles';
import { ListTypeContext } from '../List';

export type ItemProps = PropsWithChildren<{
  leading?: ReactElement<any> | ReactElement<any>[];
  trailing?: ReactElement<any> | ReactElement<any>[];
  divider?: boolean;
  highlightColor?: string;
  onPress?: () => void;
}>;

export const Item = ({
  leading,
  trailing,
  divider,
  highlightColor = colors.highlightColor,
  onPress,
  children,
}: ItemProps) => {
  const { listType, sideBar } = useContext(ListTypeContext);
  let itemContent = (
    <>
      <View style={[getItemStyles(listType), styles.row]}>
        <View style={styles.leading}>{leading}</View>
        <View style={styles.content}>{children}</View>
        <View style={styles.trailing}>{trailing}</View>
      </View>
      {divider && <View style={getDividerStyles(sideBar)} />}
    </>
  );
  if (onPress) {
    return (
      <TouchableHighlight underlayColor={highlightColor} onPress={onPress}>
        {itemContent}
      </TouchableHighlight>
    );
  }
  return itemContent;
};
