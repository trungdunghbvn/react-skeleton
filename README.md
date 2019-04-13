
## Index

- [Getting Started](#getting-started)
- [Usage](#usage)

## Getting Started

```sh
npm i react-skeleton-content --save
```

```sh
yarn add react-skeleton-content
```

## Usage

**1. SkeletonDisplayTitle:**

```jsx
import React from 'react'
import { SkeletonDisplayTitle } from 'react-skeleton-content'

class Component extends React.Component {

  render() {
    return <SkeletonDisplayTitle />
  }
}
```
##### Options

**`size?: string`**

Defaults to `small` (`small`, `medium`, `large`)

**2. SkeletonBodyText:**

```jsx
import React from 'react'
import { SkeletonBodyText } from 'react-skeleton-content'

class Component extends React.Component {

  render() {
    return <SkeletonBodyText />
  }
}
```
##### Options

**`lines?: number`**

Defaults to `3`.