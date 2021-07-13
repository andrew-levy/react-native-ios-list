import React, {
  Children,
  ReactElement,
  cloneElement,
  createContext,
} from 'react';
import { View, Text } from 'react-native';
import {
  getContainerStyles,
  colors,
  getOuterContainerStyles,
  styles,
} from '../../styles';
import { ItemProps } from '../Item';

export enum ListType {
  InsetGrouped = 'insetGrouped',
  Grouped = 'grouped',
}

type ListProps = {
  listType?: ListType;
  sideBar?: boolean;
  header?: string | ReactElement<any>;
  footer?: string | ReactElement<any>;
  backgroundColor?: string;
  children: ReactElement<ItemProps> | ReactElement<ItemProps>[];
};

export const ListTypeContext = createContext(null);

export const List = ({
  listType = ListType.Grouped,
  sideBar = false,
  backgroundColor = colors.white,
  header,
  footer,
  children,
}: ListProps) => {
  const listHeader =
    header && typeof header === 'string' ? (
      <Text style={styles.caption}>{header}</Text>
    ) : (
      header
    );
  const listFooter =
    footer && typeof footer === 'string' ? (
      <Text style={styles.caption}>{footer}</Text>
    ) : (
      footer
    );

  return (
    <ListTypeContext.Provider value={{ listType, sideBar }}>
      <View style={getOuterContainerStyles(listType)}>
        {listHeader}
        <View
          style={[
            getContainerStyles(listType),
            backgroundColor && { backgroundColor },
          ]}
        >
          {Children.map(children, (child, childKey) =>
            cloneElement(child, {
              key: childKey,
              divider: childKey !== Children.count(children) - 1,
              ...child.props,
            })
          )}
        </View>
        {listFooter}
      </View>
    </ListTypeContext.Provider>
  );
};
