# react-foaas-card

The most offensive of react components

[![Build Status](https://travis-ci.org/circa10a/react-foaas-card.svg?branch=master)](https://travis-ci.org/circa10a/react-foaas-card)
![npm](https://img.shields.io/npm/dm/react-foaas-card.svg)
[![dependencies Status](https://david-dm.org/circa10a/react-foaas-card/status.svg)](https://david-dm.org/circa10a/react-foaas-card)
[![Dev Dependencies status](https://img.shields.io/david/dev/circa10a/react-foaas-card.svg?style=flat-square)](https://david-dm.org/circa10a/react-foaas-card?type=dev)

[![NPM](https://nodei.co/npm/react-foaas-card.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-foaas-card)

[Demo](https://caleblemoine.dev/react-foaas-card/)

## Getting started

### install

```shell
npm install react-foaas-card
```

### component

```javascript
import FoaasCard from 'react-foaas-card';

<FoaasCard
    type="give"
    from="Some asshole"
/>
```

## Props

> For the `type` prop, refer to the [foaas documenation](https://foaas.com/) for supported methods

| prop | type | default | description | example |
|---|---|---|---|--|
| type | string | because | How to tell someone to fuck off| horse |
| from | string  | a react component | The subtitle, italized message | Kevin |
| classes | object | [link to source](https://github.com/circa10a/react-foaas-card/blob/master/src/index.js#L27-L39) | Classes object to configure material card styles | Refer to [material ui card api](https://material-ui.com/api/card/) |
| raised | boolean | `true` | Provide shadowing to the card | `false` |
| darkMode | boolean | `false` | Invert text and background color | `true` |
| subtitleStyles | object | `{ fontWeight: 'lighter', fontStyle: 'italic' }` | Styles for subtitles | `{ color: 'red' }` |
| middleFinger | boolean | `true` | Provide a middle finger emoji | `false` |
| middleFingerStyles | object | `{ fontSize: '30px' }` | Styles for span containing middle finger emoji | `{ padding: '50px` } |
