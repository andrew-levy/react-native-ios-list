import React, { cloneElement, Children, ReactElement } from 'react';
import { Section } from '../components/Section';
import { SectionProps } from '../components/Section/Section';

type SectionToCreate = {
  item: ReactElement<any>;
  index: number;
};

export const getSectionsFromChildren = (children) => {
  let sections: Array<ReactElement<SectionProps>> = [];
  let sectionToCreate: Array<SectionToCreate> = [];

  const addNewSection = (sectionToCreate) => {
    let sectionToAdd = (
      <Section>{sectionToCreate.map((el) => el.item)}</Section>
    );
    sections = [...sections, sectionToAdd];
  };

  const addSingleton = (child, i) => {
    sectionToCreate = [...sectionToCreate, { item: child, index: i }];
  };

  Children.forEach(children, (child, i) => {
    if (child.type === Section) {
      if (sectionToCreate.length) {
        addNewSection(sectionToCreate);
      }
      sections = [...sections, child];
    } else {
      if (sectionToCreate.length) {
        if (sectionToCreate[sectionToCreate.length - 1].index === i - 1) {
          addSingleton(child, i);
        } else {
          addNewSection(sectionToCreate);
          sectionToCreate = [];
        }
      } else {
        addSingleton(child, i);
      }
      if (i === Children.count(children) - 1 && sectionToCreate.length) {
        addNewSection(sectionToCreate);
      }
    }
  });
  return sections;
};

export const createSection = (children, header: string, sectionKey: number) => (
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
