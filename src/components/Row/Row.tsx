import React, { PropsWithChildren, ReactElement, useContext } from 'react';
import { TouchableHighlight, View } from 'react-native';
import { styles, getRowStyles, getDividerStyles, colors } from '../../styles';
import { ListStyleContext } from '../List';

export type RowProps = PropsWithChildren<{
  leading?: ReactElement<any> | ReactElement<any>[];
  trailing?: ReactElement<any> | ReactElement<any>[];
  divider?: boolean;
  backgroundColor?: string;
  highlightColor?: string;
  onPress?: () => void;
}>;

export const Row = ({
  leading,
  trailing,
  divider,
  backgroundColor, 
  highlightColor = colors.highlightColor,
  onPress,
  children,
}: RowProps) => {
  const { listStyle, sideBar } = useContext(ListStyleContext);
  let rowContent = (
    <>
      <View style={[
        getRowStyles(listStyle), 
        styles.row, 
        backgroundColor && { backgroundColor }
      ]}>
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
        {rowContent}
      </TouchableHighlight>
    );
  }
  return rowContent;
};
