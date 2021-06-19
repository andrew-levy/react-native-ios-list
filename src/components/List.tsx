import React, {
  createContext,
  cloneElement,
  Children,
  ReactElement,
} from 'react';
import { ScrollView, Text } from 'react-native';
import { ItemProps } from './Item';
import { PressableItemProps } from './PressableItem';
import { LabelItemProps } from './LabelItem';
import { Section, SectionProps } from './Section';

export enum ListStyle {
  insetGrouped = 'insetGrouped',
  grouped = 'grouped',
}

type ListProps = {
  listStyle: ListStyle;
  header: string;
  sidebar: boolean;
  children:
    | ReactElement<PressableItemProps | LabelItemProps | ItemProps>
    | Array<ReactElement<PressableItemProps | LabelItemProps | ItemProps>>;
};

export const ListStyleContext = createContext(null);

export const List = ({
  listStyle = ListStyle.grouped,
  header,
  sidebar,
  children,
}: ListProps) => {
  let sections: Array<ReactElement<SectionProps>> = [];
  Children.forEach(children, (child, i) => {
    if (child.type === Section) {
      sections = [...sections, child];
    }
  });

  const createSection = (children, header, sectionKey = 0) => {
    console.log(children);

    return (
      <Section header={header} key={sectionKey}>
        {Children.map(children, (child, childKey) =>
          cloneElement(child, {
            key: childKey,
            divider: childKey !== Children.count(children) - 1,
            ...child.props,
          })
        )}
      </Section>
    );
  };

  return (
    <ListStyleContext.Provider value={listStyle}>
      <ScrollView style={{ backgroundColor: '#f2f2f7' }}>
        {sections.length
          ? sections.map((section, sectionKey) =>
              createSection(
                section.props.children,
                section.props.header,
                sectionKey
              )
            )
          : createSection(children, header)}
      </ScrollView>
    </ListStyleContext.Provider>
  );
};
