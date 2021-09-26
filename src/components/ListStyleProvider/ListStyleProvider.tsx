import React, { createContext, ReactElement } from 'react';
import { ListProps } from '../List';

type ListStyleProviderProps = {
  dividerColor: string;
  sideBar: boolean;
  children: ReactElement<ListProps>;
};
export const ListStyleContext = createContext(null);

export const ListStyleProvider = ({
  children,
  dividerColor,
  sideBar,
}: ListStyleProviderProps) => {
  return (
    <ListStyleContext.Provider value={{ sideBar, dividerColor }}>
      {children}
    </ListStyleContext.Provider>
  );
};
