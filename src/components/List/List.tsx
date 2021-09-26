import React, {
  Children,
  ReactElement,
  cloneElement,
  PropsWithChildren,
} from 'react';
import { View, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { colors } from '../../utils';
import { Caption } from '../Caption';
import { ListStyleProvider } from '../ListStyleProvider';
import { RowProps } from '../Row';

export type ListProps = PropsWithChildren<{
  inset?: boolean;
  sideBar?: boolean;
  hideDividers?: boolean;
  header?: string | ReactElement<any>;
  footer?: string | ReactElement<any>;
  backgroundColor?: string;
  containerBackgroundColor?: string;
  dividerColor?: string;
  headerColor?: string;
  footerColor?: string;
  style?: StyleProp<ViewStyle>;
}>;

export const List = ({
  inset = false,
  sideBar = false,
  hideDividers = false,
  header,
  footer,
  backgroundColor,
  containerBackgroundColor,
  headerColor = colors.systemgray,
  footerColor = colors.systemgray,
  dividerColor = colors.systemgray3,
  style,
  children,
}: ListProps) => {
  const listStyle = inset ? 'insetGrouped' : 'grouped';
  return (
    <ListStyleProvider sideBar={sideBar} dividerColor={dividerColor}>
      <View
        style={[
          getOuterContainerStyles(listStyle),
          containerBackgroundColor && {
            backgroundColor: containerBackgroundColor,
          },
        ]}
      >
        {header && <Caption caption={header} color={headerColor} />}
        <View
          style={[
            getContainerStyles(listStyle),
            backgroundColor && { backgroundColor },
            dividerColor && { borderColor: dividerColor },
            style,
          ]}
        >
          {Children.map(
            children,
            (child: React.ReactElement<RowProps>, index: number) =>
              cloneElement(child, {
                hideDivider:
                  hideDividers || index === Children.count(children) - 1,
                ...child.props,
              })
          )}
        </View>
        {footer && <Caption caption={footer} color={footerColor} />}
      </View>
    </ListStyleProvider>
  );
};

const getOuterContainerStyles = (type: string) => {
  switch (type) {
    case 'grouped':
      return styles.groupedOuterContainer;
    case 'insetGrouped':
      return styles.insetGroupedOuterContainer;
    default:
      return styles.groupedOuterContainer;
  }
};

const getContainerStyles = (type: string) => {
  switch (type) {
    case 'grouped':
      return styles.groupedContainer;
    case 'insetGrouped':
      return styles.insetGroupedContainer;
    default:
      return styles.groupedContainer;
  }
};

const styles = StyleSheet.create({
  groupedOuterContainer: {
    width: '100%',
    backgroundColor: colors.transparent,
  },
  insetGroupedOuterContainer: {
    width: '90%',
    backgroundColor: colors.transparent,
    alignSelf: 'center',
  },
  groupedContainer: {
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth * 1.2,
    borderTopWidth: StyleSheet.hairlineWidth * 1.2,
  },
  insetGroupedContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
