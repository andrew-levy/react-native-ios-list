# react-native-ios-list

## Installation

```console
yarn add react-native-ios-list
```

## Usage

```jsx
import { List, Section, PressableItem, Item } from 'react-native-ios-list';
```

```jsx
<List listStyle={ListStyle.insetGrouped}>
  {/* Static List Items */}
  <Section header='Static Items'>
    <PressableItem onPress={() => console.log('Option 1')}>
      <Text>Option 1</Text>
    </PressableItem>
    <PressableItem onPress={() => console.log('Option 2')}>
      <Text>Option 2</Text>
    </PressableItem>
  </Section>
  {/* Dynamic List Items */}
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
