import { StyleSheet } from 'react-native';

const colors = {
  systemgray6: '#f2f2f7',
  systemgray3: '#c7c7cc',
  systemgray: '#8e8e93',
  white: '#fff',
};

export const styles = StyleSheet.create({
  groupedContainer: {
    backgroundColor: colors.white,
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth * 1.2,
    borderTopWidth: StyleSheet.hairlineWidth * 1.2,
    borderColor: colors.systemgray3,
    marginVertical: 10,
  },
  insetGroupedContainer: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    overflow: 'hidden',
    marginVertical: 10,
  },
  groupedItem: {
    backgroundColor: colors.white,
    width: '100%',
    padding: 10,
    paddingLeft: '5%',
  },
  insetGroupedItem: {
    backgroundColor: colors.white,
    width: '100%',
    padding: 10,
    paddingLeft: '5%',
  },
  groupedHeader: {
    paddingLeft: '5%',
    color: '#8e8e93',
    fontWeight: '500',
  },
  insetGroupedHeader: {
    paddingLeft: '7%',
    color: colors.systemgray,
    fontWeight: '500',
  },
  divider: {
    borderColor: colors.systemgray3,
    borderBottomWidth: StyleSheet.hairlineWidth * 1.2,
    marginLeft: '5%',
  },
});

export const getContainerStyles = (style: string) => {
  switch (style) {
    case 'grouped':
      return styles.groupedContainer;
    case 'insetGrouped':
      return styles.insetGroupedContainer;
    default:
      return styles.groupedContainer;
  }
};

export const getItemStyles = (style: string) => {
  switch (style) {
    case 'grouped':
      return styles.groupedItem;
    case 'insetGrouped':
      return styles.insetGroupedItem;
  }
};

export const getHeaderStyles = (style: string) => {
  switch (style) {
    case 'grouped':
      return styles.groupedHeader;
    case 'insetGrouped':
      return styles.insetGroupedHeader;
  }
};
