# react-native-ios-list

iOS-styled list and list item components

<!-- ## Installation

<i>(Coming soon to package manager near you...)</i>

```console
yarn add react-native-ios-list
``` -->

## Example

```jsx
import React from 'react';
import { Text } from 'react-native';
import { List, Section, Item, ListStyle } from 'react-native-ios-list';

function StaticList() {
  return (
    <List listStyle={ListStyle.InsetGrouped}>
      <Section header='Section 1'>
        <Item>
          <Text>Option 1</Text>
        </Item>
        <Item>
          <Text>Option 2</Text>
        </Item>
      </Section>
      <Section header='Section 2'>
        <Item>
          <Text>Option 1</Text>
        </Item>
        <Item>
          <Text>Option 2</Text>
        </Item>
      </Section>
    </List>
  );
}
```

You can also dynamically render list items by mapping over an array (be sure to use a unique key)

```jsx
function DynamicList() {
  const items = ['Selection 1, Selection 2, Selection 3'];
  return (
    <List listStyle={ListStyle.Grouped}>
      {items.map((text, i) => (
        <Item
          onPress={() => console.log('Pressed!')}
          leading={<ProfileIcon />}
          trailing={<RightChevron />}
          key={i}
        >
          <Text>{text}</Text>
        </Item>
      ))}
    </List>
  );
}
```

## Documentation

### `List`

The `List` component is the container for all of your list items and list sections.

| Prop        | Type        | Description                                  | Default                  |
| ----------- | ----------- | -------------------------------------------- | ------------------------ |
| `listStyle` | `ListStyle` | The style of the list                        | `ListStyle.InsetGrouped` |
| `sideBar`   | `boolean`   | Put icon in the leading sidebar of each item | `false`                  |

`ListStyle` is an enum with the following properties,

```jsx
enum ListStyle {
  InsetGrouped = 'insetGrouped',
  Grouped = 'grouped',
}
```

The `InsetGrouped` style gives the list container rounded corners and horizontal margin.

The `Grouped` style gives the list container the original iOS list look with sharp edges and 100% width.

### `Section`

The `Section` component is an optional container for all of your list items. Each `Section` within a `List` will be its own separate list, separated by some margin. You can achieve the same effect by simply using multiple `List` components.

| Prop     | Type     | Description               | Default |
| -------- | -------- | ------------------------- | ------- |
| `header` | `string` | The section's header text | `null`  |
| `footer` | `string` | The section's footer text | `null`  |

### `Item`

The `Item` component is the content you want to show in each row of the list. You can statically add each `Item` or dynamically render them by mapping over some array.

An item consists of 3 subsections: `leading`, `content`, and `trailing`. Each corresponds to a different part of the row and all are optional. Here's an example:

```jsx
<Item
  leading={<CustomIcon />}
  content={<Text>Dark Mode</Text>}
  trailing={<Switch />}
/>
```

Sometimes the bulk of the item is in the `content`, so you also have the option of defining the content as a child of the item ... Totally up to you!

```jsx
<Item leading={<MoonIcon />} trailing={<RightChevron />}>
  <View
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}
  >
    <Text>Dark Mode</Text>
    <Text style={{ color: 'lightgrey' }}>On</Text>
  </View>
</Item>
```

| Prop       | Type                   | Description                                                                                  | Default |
| ---------- | ---------------------- | -------------------------------------------------------------------------------------------- | ------- |
| `leading`  | `ReactNode`            | Left component (usually an icon)                                                             | `null`  |
| `content`  | `ReactNode`            | Item content                                                                                 | `null`  |
| `trailing` | `ReactNode`            | Right component (usually an icon or control)                                                 | `null`  |
| `onPress`  | `() => void`           | Action to execute when pressed                                                               | `null`  |
| `divider`  | `boolean`              | Show divider line                                                                            | `true`  |
| `style`    | `StyleProp<ViewStyle>` | Styles to override any pre built styles                                                      | `null`  |
| `children` | `ReactNode`            | If no `content` is specified as a prop, the `children` will render in the place of `content` | `null`  |
