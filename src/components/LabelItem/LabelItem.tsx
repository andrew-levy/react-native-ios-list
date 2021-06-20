import React, { ReactNode, useContext } from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { styles, getItemStyles } from '../../styles';
import { ListStyleContext } from '../List/List';

export type LabelItemProps = {
  icon: ReactNode;
  text?: string;
  trailing?: any;
  divider?: boolean;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
};

export const LabelItem = ({
  icon,
  text,
  trailing,
  divider,
  style,
  children,
}: LabelItemProps) => {
  const listStyle = useContext(ListStyleContext);
  return (
    <>
      <View style={[getItemStyles(listStyle), style]}>
        {/* Flex for trailing and content - spacebetween */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* icon */}
            <View style={{ paddingRight: 10 }}>{icon}</View>
            {/* text/content */}
            {text ? <Text>{text}</Text> : <View>{children}</View>}
          </View>
          {/* trailing (optional) */}
          <View>{trailing}</View>
        </View>
      </View>
      {divider && <View style={styles.divider} />}
    </>
  );
};
