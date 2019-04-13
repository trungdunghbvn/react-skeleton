<p align="center">
  <img width="350" alt="react-content-loader" src="https://user-images.githubusercontent.com/4838076/34419335-5669c3f8-ebea-11e7-9668-c47b7846970b.png"/>
</p>
<p align="center">
  <img width="400" alt="Example's react-content-loader" src="https://user-images.githubusercontent.com/4838076/34308760-ec55df82-e735-11e7-843b-2e311fa7b7d0.gif" />
</p>

SVG-Powered component to easily create placeholder loadings (like Facebook's cards loading).

## Features

- :gear: **Customizable:** Feel free to change the colors, speed, sizes and even **RTL**;
- :ok_hand: **Plug and play:** with many presets to use, see the [examples](#examples);
- :pencil2: **DIY:** use the [create-content-loader](https://danilowoz.github.io/create-content-loader/) to create your own custom loaders easily;
- ⚛️ **Lightweight:** only **1.4kB** gzipped and **0 dependencies**;

## Index

- [Getting Started](#getting-started)

## Getting Started

```sh
npm i react-skeleton-content --save
```

```sh
yarn add react-skeleton-content

## SkeletonDisplayTitle

```sh
import React from 'react'
import { SkeletonDisplayTitle } from 'react-skeleton-content'

class Component extends React.Component {

  render() {
    return <SkeletonDisplayTitle />
  }
}
