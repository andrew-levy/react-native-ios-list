import React, { createContext, ReactNode } from 'react';
import { ScrollView, StyleProp, ViewStyle } from 'react-native';
import { styles } from '../../styles';
import { getSectionsFromChildren, createSection } from '../../utils';

export enum ListStyle {
  InsetGrouped = 'insetGrouped',
  Grouped = 'grouped',
}

type ListProps = {
  listStyle: ListStyle;
  sidebar?: boolean;
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
};

export const ListStyleContext = createContext(null);

export const List = ({
  listStyle = ListStyle.Grouped,
  sidebar,
  children,
}: ListProps) => {
  const sections = getSectionsFromChildren(children);
  return (
    <ListStyleContext.Provider value={listStyle}>
      <ScrollView style={styles.scrollView}>
        {sections.map((section, sectionKey) =>
          createSection(
            section.props.children,
            section.props.header,
            sectionKey
          )
        )}
      </ScrollView>
    </ListStyleContext.Provider>
  );
};
