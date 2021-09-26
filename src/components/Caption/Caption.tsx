import React, { ReactElement } from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from '../../utils';

type CaptionProps = {
  caption: string | ReactElement<any>;
  color: string;
};

export const Caption = ({ caption, color }: CaptionProps) => {
  return typeof caption === 'string' ? (
    <Text style={[styles.caption, color && { color }]}>{caption}</Text>
  ) : (
    caption
  );
};

const styles = StyleSheet.create({
  caption: {
    color: colors.systemgray,
    fontWeight: '500',
    marginLeft: '3%',
    marginVertical: 10,
  },
});
