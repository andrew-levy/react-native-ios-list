import React, { PropsWithChildren, ReactElement, useContext } from 'react';
import {
  StyleProp,
  TouchableHighlight,
  View,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import { colors, SYSTEM_SPACE } from '../../utils';
import { ListStyleContext } from '../ListStyleProvider';

export type RowProps = PropsWithChildren<{
  leading?: ReactElement<any> | ReactElement<any>[] | null;
  trailing?: ReactElement<any> | ReactElement<any>[] | null;
  hideDivider?: boolean;
  backgroundColor?: string;
  highlightColor?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}>;

export const Row = ({
  leading,
  trailing,
  backgroundColor,
  hideDivider,
  highlightColor = colors.highlightColor,
  onPress,
  style,
  children,
}: RowProps) => {
  const { sideBar, dividerColor } = useContext(ListStyleContext);

  const rowContent = sideBar ? (
    <View
      style={[
        rowStyles.container,
        backgroundColor && { backgroundColor },
        style,
      ]}
    >
      <View
        style={[
          {
            marginHorizontal: leading ? 2 * SYSTEM_SPACE : SYSTEM_SPACE,
          },
        ]}
      >
        {leading}
      </View>
      <View style={rowStyles.sideBarContentContainer}>
        <View style={rowStyles.content}>{children}</View>
        {trailing && <View style={rowStyles.trailing}>{trailing}</View>}
        {!hideDivider && (
          <View style={[rowStyles.divider, { borderColor: dividerColor }]} />
        )}
      </View>
    </View>
  ) : (
    <View
      style={[
        rowStyles.container,
        backgroundColor && { backgroundColor },
        style,
      ]}
    >
      <View style={rowStyles.contentContainer}>
        {leading && <View style={rowStyles.leading}>{leading}</View>}
        <View style={rowStyles.content}>{children}</View>
        {trailing && <View style={rowStyles.trailing}>{trailing}</View>}
        {!hideDivider && (
          <View
            style={[
              rowStyles.divider,
              dividerColor && { borderColor: dividerColor },
            ]}
          />
        )}
      </View>
    </View>
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

const rowStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    minHeight: 40,
    paddingVertical: SYSTEM_SPACE,
  },
  sideBarContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SYSTEM_SPACE,
    flexGrow: 1,
    minHeight: 40,
    height: '100%',
  },
  content: {
    flexGrow: 1,
    marginRight: SYSTEM_SPACE,
  },
  leading: {
    marginRight: SYSTEM_SPACE,
  },
  trailing: {
    marginRight: SYSTEM_SPACE,
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth * 1.2,
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
  },
});
