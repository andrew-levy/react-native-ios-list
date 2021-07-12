import React, {
  Children,
  cloneElement,
  createContext,
  ReactElement,
} from 'react';
import { ScrollView, View, Text } from 'react-native';
import { getContainerStyles, getCaptionStyles, styles } from '../../styles';

export enum ListType {
  InsetGrouped = 'insetGrouped',
  Grouped = 'grouped',
}

type ListProps = {
  listType: ListType;
  sideBar?: boolean;
  scroll?: true;
  header?: string;
  footer?: string;
  children: ReactElement<any> | ReactElement<any>[];
};

export const ListTypeContext = createContext(null);

export const List = ({
  listType = ListType.Grouped,
  sideBar = false,
  scroll = true,
  header,
  footer,
  children,
}: ListProps) => {
  const items = (
    <>
      {header && <Text style={getCaptionStyles(listType)}>{header}</Text>}
      <View style={getContainerStyles(listType)}>
        {Children.map(children, (child, childKey) =>
          cloneElement(child, {
            key: childKey,
            divider: childKey !== Children.count(children) - 1,
            ...child.props,
          })
        )}
      </View>
      {footer && <Text style={getCaptionStyles(listType)}>{footer}</Text>}
    </>
  );
  return (
    <ListTypeContext.Provider value={{ listType, sideBar }}>
      {scroll ? (
        <ScrollView style={styles.scrollView}>{items}</ScrollView>
      ) : (
        <View style={styles.scrollView}>{items}</View>
      )}
    </ListTypeContext.Provider>
  );
};
