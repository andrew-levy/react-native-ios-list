import React, { createContext, ReactNode } from 'react';
import { ScrollView, StyleProp, ViewStyle, View } from 'react-native';
import { styles } from '../../styles';
import { getSectionsFromChildren, createSection } from '../../utils';

export enum ListStyle {
  InsetGrouped = 'insetGrouped',
  Grouped = 'grouped',
}

type ListProps = {
  listStyle: ListStyle;
  sidebar?: boolean;
  scroll?: true;
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
};

export const ListStyleContext = createContext(null);

export const List = ({
  listStyle = ListStyle.Grouped,
  sidebar = false,
  scroll = true,
  children,
}: ListProps) => {
  const sections = getSectionsFromChildren(children);
  const createdSections = sections.map((section, sectionKey) =>
    createSection(section.props.children, section.props.header, sectionKey)
  );
  return (
    <ListStyleContext.Provider value={listStyle}>
      {scroll ? (
        <ScrollView style={styles.scrollView}>{createdSections}</ScrollView>
      ) : (
        <View style={styles.scrollView}>{createdSections}</View>
      )}
    </ListStyleContext.Provider>
  );
};
