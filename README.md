# react-native-ios-list

iOS-styled list and list item components

<!-- ## Installation

<i>(Coming soon to package manager near you...)</i>

```console
yarn add react-native-ios-list
``` -->

## Usage

Import the components you need

```jsx
import {
  List,
  Section,
  PressableItem,
  Item,
  ListStyle,
} from 'react-native-ios-list';
import { Text } from 'react-native';
```

A `List` component can contain a list item (`Item`, `PressableItem`, or `LabelItem`) or a `Section` component. Sections split up items into their own separate lists.

```jsx
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
```

You can also dynamically render list items by mapping over an array.

```jsx
<List listStyle={ListStyle.Grouped}>
  {Array(4)
    .fill(0)
    .map((_, i) => (
      <PressableItem onPress={() => console.log('Pressed!')}>
        <Text>{`Option ${i}`}</Text>
      </PressableItem>
    ))}
</List>
```
