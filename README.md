# react-native-ios-list

iOS-styled list and list item components

<!-- ## Installation

```console
yarn add react-native-ios-list
``` -->

## Example

```jsx
import React from 'react';
import { Text } from 'react-native';
import { List, Item, ListType } from 'react-native-ios-list';

function StaticList() {
  return (
    <List listType={ListType.InsetGrouped}>
      <Item>
        <Text>Option 1</Text>
      </Item>
      <Item>
        <Text>Option 2</Text>
      </Item>
      <Item>
        <Text>Option 3</Text>
      </Item>
    </List>
  );
}
```

You can also dynamically render list items by mapping over an array (be sure to use a unique key)

```jsx
function DynamicList() {
  const items = ['Option 1, Option 2, Option 3'];
  return (
    <List listType={ListType.Grouped}>
      {items.map((text, i) => (
        <Item key={i}>
          <Text>{text}</Text>
        </Item>
      ))}
    </List>
  );
}
```

## Documentation

### `List`

The `List` component is the container for all of your list items.

| Prop       | Type                     | Description                              | Default                | Required                 |
| ---------- | ------------------------ | ---------------------------------------- | ---------------------- | ------------------------ |
| `listType` | `ListType`               | The style of the list                    | `ListType.Grouped`     | :heavy_multiplication_x: |
| `sideBar`  | `boolean`                | Leading component in left margin of item | `false`                | :heavy_multiplication_x: |
| `header`   | `ReactElement<any> | string`                                  | Content above the list | `null`                   | :heavy_check_mark: |
| `footer`   | `ReactElement<any> | string`                                  | Content below the list | `null`                   | :heavy_check_mark: |
| `children` | `ReactElement<ItemProps> | ReactElement<ItemProps>[]`               | The list items         | `null`                   | :heavy_check_mark: |

`ListType` is an enum with the following properties,

```jsx
enum ListType {
  InsetGrouped = 'insetGrouped',
  Grouped = 'grouped',
}
```

The `InsetGrouped` style gives the list container rounded corners and horizontal margin.

The `Grouped` style gives the list container the original iOS list look with sharp edges and 100% width.

### `Item`

The `Item` component is the content you want to show in each row of the list. You can statically add each `Item` or dynamically render them by mapping over some array.

An item consists of 3 sections:

- `leading` (left-most component)
- `trailing` (right-most component)
- `children` (center content)

Each corresponds to a different part of the row and all are optional.

```jsx
<Item leading={<MoonIcon />} trailing={<RightChevron />}>
  <View style={styles.row}>
    <Text>Dark Mode</Text>
    <Text>On</Text>
  </View>
</Item>
```

| Prop             | Type                   | Description                             | Default                                      | Required                 |
| ---------------- | ---------------------- | --------------------------------------- | -------------------------------------------- | ------------------------ | 
| `leading`        | `ReactElement<any> | ReactElement<any>[]`                    | Left component (usually an icon)             | `null`                   | :heavy_multiplication_x: |
| `trailing`       | `ReactElement<any> | ReactElement<any>[]`                    | Right component (usually an icon or control) | `null`                   | :heavy_multiplication_x: |
| `onPress`        | `() => void`           | Action to execute when pressed          | `null`                                       | :heavy_multiplication_x: |
| `highlightColor` | `string`               | Highlight color on press                | `'#e5e5ea'`                                  | :heavy_multiplication_x: |
| `divider`        | `boolean`              | Show divider line                       | `true`                                       | :heavy_multiplication_x: |
| `style`          | `StyleProp<ViewStyle>` | Styles to override any pre built styles | `null`                                       | :heavy_multiplication_x: |
| `children`       | `ReactNode`            | The content of the list item            | `null`                                       | :heavy_multiplication_x: |
