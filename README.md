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

### `<List />`

The `List` component is the container for all of your list items.

#### Props:

#### `listType` 

The style of the list  

```jsx
enum ListType {
  InsetGrouped = 'insetGrouped',
}
```

The `InsetGrouped` style gives the list container rounded corners and horizontal margin.

The `Grouped` style gives the list container the original iOS list look with sharp edges and 100% width.

> required: no | type:  `ListType`  | default: `ListType.Grouped`

#### `sideBar` 

Leading component in left margin of item

> required: no | type:  `boolean`  | default: `false`

#### `header` 

Content above the list

> required: no | type:  `ReactElement<any> | string`   | default: `null`


#### `footer` 

Content below the list

> required: no | type:  `ReactElement<ItemProps> | ReactElement<ItemProps>[]`    | default: `null`     
       
#### `children` 

The list items

> required: no | type:  `boolean`   | default: `true`





### `<Item />`

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
#### Props:

#### `leading` 

Left component (usually an icon) 

> required: no | type:  `ReactElement<any>     | ReactElement<any>[]`  | default: `null`

#### `trailing` 

Right component (usually an icon or control)

> required: no | type:  `ReactElement<any>     | ReactElement<any>[]`  | default: `null`

#### `onPress` 

Action to execute when pressed 

> required: no | type:  `() => void`   | default: `null`


#### `highlightColor` 

Highlight color on press 

> required: no | type:  `string`   | default: `'#e5e5ea'`     
       
#### `divider` 

Show divider line

> required: no | type:  `boolean`   | default: `true`

#### `children` 

The content of the list item 

> required: no | type:  `Reactnode`   | default: `null`


