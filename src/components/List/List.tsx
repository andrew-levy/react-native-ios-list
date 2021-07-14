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
import { RowProps } from '../Row';


type ListProps = {
  inset?: boolean;
  sideBar?: boolean;
  header?: string | ReactElement<any>;
  footer?: string | ReactElement<any>;
  backgroundColor?: string;
  children: ReactElement<RowProps> | ReactElement<RowProps>[];
};

export const ListStyleContext = createContext(null);

export const List = ({
  inset = false,
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

  const listStyle = inset ? 'insetGrouped' : 'grouped'
  return (
    <ListStyleContext.Provider value={{ listStyle, sideBar }}>
      <View style={getOuterContainerStyles(listStyle)}>
        {listHeader}
        <View
          style={[
            getContainerStyles(listStyle),
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
    </ListStyleContext.Provider>
  );
};
