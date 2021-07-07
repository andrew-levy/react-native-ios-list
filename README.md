# react-native-ios-list

## Installation

<i>(Coming soon to package manager near you...)</i>

```console
yarn add react-native-ios-list
```

## Usage

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

Static List Items

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

Dynamic List Items

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
