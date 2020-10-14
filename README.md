# React Lifecycle Hooks

> Hooks implementation of common react lifecycle methods.

## Install

```
$ npm install react-lifecycle-hooks
```

## Usage

```js
import {
  useComponentDidMount,
  useComponentDidUpdate,
  useComponentWillUnmount,
} from 'react-lifecycle-hooks';

const SomeComponent = () => {
  useComponentDidMount(() => {
    // Your effect that will fire once
  });

  useComponentDidUpdate(() => {
    // Your effect
  });

  useComponentWillUnmount(() => {
    // Your effect
  });
};
```

Just like with a regular `useEffect` you can pass guards/dependencies to `useComponentDidUpdate` to make it fire only when those dependencies has been updated.

```js
const SomeComponent = () => {
  useComponentDidUpdate(() => {
    // Your effect that only fires when someProp is updated
  }, [someProp]);
};
```

## Reasoning

I like readable code. I like react. What I don't like is the somewhat convoluted code that comes with implementing lifecycle methods with `useEffect`. For example, returning a function in the end of an effect never screamed "This will be fired before the component unmounts" to me.
