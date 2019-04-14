
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

**Still not clear?** Take a look at this working example at [codesandbox.io](https://codesandbox.io/s/n5323qv86l)

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

**Still not clear?** Take a look at this working example at [codesandbox.io](https://codesandbox.io/s/n5323qv86l)

**3. SkeletonThumbnail:**

```jsx
import React from 'react'
import { SkeletonThumbnail } from 'react-skeleton-content'

class Component extends React.Component {

  render() {
    return <SkeletonThumbnail />
  }
}
```
##### Options

**`size?: string`**

Defaults to `small` (`small`, `medium`, `large`)

**`round?: boolean`**

Defaults to `false`.

**Still not clear?** Take a look at this working example at [codesandbox.io](https://codesandbox.io/s/9j6zov3yy4)