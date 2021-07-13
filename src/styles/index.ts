import { StyleSheet } from 'react-native';

export const colors = {
  systemgray: '#8e8e93',
  systemgray3: '#c7c7cc',
  systemgray6: '#f2f2f7',
  white: '#fff',
  highlightColor: '#e5e5ea',
  transparent: 'transparent',
};

export const styles = StyleSheet.create({
  groupedOuterContainer: {
    width: '100%',
    backgroundColor: colors.transparent,
  },
  insetGroupedOuterContainer: {
    width: '90%',
    backgroundColor: colors.transparent,
    alignSelf: 'center',
  },
  groupedContainer: {
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth * 1.2,
    borderTopWidth: StyleSheet.hairlineWidth * 1.2,
    borderColor: colors.systemgray3,
    marginVertical: 10,
  },
  insetGroupedContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  groupedItem: {
    backgroundColor: colors.transparent,
    width: '100%',
    padding: 10,
    paddingLeft: '5%',
  },
  insetGroupedItem: {
    backgroundColor: colors.transparent,
    width: '100%',
    padding: 10,
    paddingLeft: '5%',
  },
  caption: {
    color: colors.systemgray,
    fontWeight: '500',
    marginLeft: '3%',
  },
  divider: {
    borderColor: colors.systemgray3,
    borderBottomWidth: StyleSheet.hairlineWidth * 1.2,
    marginLeft: '5%',
  },
  background: { backgroundColor: colors.systemgray6 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flexGrow: 1,
  },
  leading: { marginRight: 10 },
  trailing: { marginLeft: 10 },
});

export const getOuterContainerStyles = (type: string) => {
  switch (type) {
    case 'grouped':
      return styles.groupedOuterContainer;
    case 'insetGrouped':
      return styles.insetGroupedOuterContainer;
    default:
      return styles.groupedOuterContainer;
  }
};

export const getContainerStyles = (type: string) => {
  switch (type) {
    case 'grouped':
      return styles.groupedContainer;
    case 'insetGrouped':
      return styles.insetGroupedContainer;
    default:
      return styles.groupedContainer;
  }
};

export const getItemStyles = (type: string) => {
  switch (type) {
    case 'grouped':
      return styles.groupedItem;
    case 'insetGrouped':
      return styles.insetGroupedItem;
  }
};

// TODO
export const getDividerStyles = (sideBar: boolean) => {
  return styles.divider;
  // return sideBar ? { ...styles.divider, paddingLeft: '10%' } : styles.divider;
};
