# react-native-ios-list

iOS-styled list and list row components

<!-- ## Installation

```console
yarn add react-native-ios-list
``` -->

## Usage

Import the components you need 
```jsx
import React from 'react';
import { Text } from 'react-native';
import { List, Row } from 'react-native-ios-list'; 
```
Render each list item as a `Row` inside of the `List` container
```jsx
function StaticList() {
  return (
    <List> 
      <Row> 
        <Text>Row 1</Text>
      </Row>
      <Row>
        <Text>Row 2</Text>
      </Row>
      <Row>
        <Text>Row 3</Text>
      </Row>
    </List>
  );
}
```

You can also dynamically render rows by mapping over an array (be sure to use a unique key)

```jsx
function DynamicList() {
  const rows = ['Row 1, Row 2, Row 3'];
  return (
    <List>
      {rows.map((text, i) => (
        <Row key={i}>
          <Text>{text}</Text>
        </Row>
      ))}
    </List>
  );
}
```

## Documentation

### `<List />`

The `List` component is the container for all of your list items.

#### Props:

#### `inset` 

Gives the list rounded corners and adjusts list width to be inset from the edges of the parent view.

This prop is based off of inset grouped and grouped list styles found in the <a href="https://developer.apple.com/design/human-interface-guidelines/ios/views/tables/">Apple Human Interface Guidelines</a>. 

> required: no 
>
> type:  `boolean` 
>
> default: `false`

#### `sideBar` 

If enabled, the `leading` prop for each `Row` will display in the left margin of the row item, extending past the divider.

> required: no 
>
> type:  `boolean`  
>
> default: `false`


#### `header` 

Content or text above the list

> required: no 
>
> type:  `ReactElement<any> | string` 
>  
> default: `null`


#### `footer` 

Content or text below the list

> required: no 
>
> type:  `ReactElement<RowProps> | ReactElement<RowProps>[]` 
>   
> default: `null`     
       
#### `children` 

The list rows

> required: no 
>
> type: `ReactNode`   
>
> default: `true`


---


### `<Row />`

The `Row` component is the content you want to show in each row of the list. You can statically add each `Row` or dynamically render them by mapping over some array.

An row consists of 3 sections:

- `leading`: left-most component
- `trailing`: right-most component
- `children`: center content

Each corresponds to a different part of the row and all are optional.

```jsx
<Row leading={<MoonIcon />} trailing={<RightChevron />}>
  <View style={styles.rowSpaceBetween}>
    <Text>Dark Mode</Text>
    <Text>On</Text>
  </View>
</Row>
```
#### Props:

#### `leading` 

Left component. This is usually an icon.

> required: no 
>
> type: `ReactElement<any>     | ReactElement<any>[]`  
>
> default: `null`

#### `trailing` 

Right component. This is usually an icon or a control.

> required: no 
>
> type: `ReactElement<any>     | ReactElement<any>[]` 
> 
> default: `null`

#### `onPress` 

An action to execute when the row is pressed.

> required: no 
>
> type: `() => void`   
>
> default: `null`

#### `backgroundColor` 

Row background color.

> required: no 
>
> type: `string`   
>
> default: `'transparent'`  


#### `highlightColor` 

Highlight color when pressed.

> required: no 
>
> type: `string`   
>
> default: `'#e5e5ea'`     
       
#### `divider` 

Show divider line

> required: no 
>
> type: `boolean`   
>
> default: `true`

#### `children` 

The content of the list row 

> required: no 
>
> type: `Reactnode`   
>
> default: `null`

