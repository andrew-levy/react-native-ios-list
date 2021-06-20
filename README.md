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
<List listStyle={ListStyle.insetGrouped}>
  <Section header='Static Items'>
    <PressableItem onPress={() => console.log('Option 1')}>
      <Text>Option 1</Text>
    </PressableItem>
    <PressableItem onPress={() => console.log('Option 2')}>
      <Text>Option 2</Text>
    </PressableItem>
  </Section>
</List>
```

Dynamic List Items

```jsx
<List listStyle={ListStyle.grouped}>
  <Section header='Dynamic Items'>
    {Array(4)
      .fill(0)
      .map((_, i) => (
        <Item>
          <Text>{`Option ${i}`}</Text>
        </Item>
      ))}
  </Section>
</List>
```
