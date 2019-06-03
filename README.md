Gatsby-crudzoo is Gatsby theme.
Used in [https://crudzoo.com](https://crudzoo.com)

## Getting started

### Installation

```
npm init -y
npm install gatsby react react-dom https://github.com/Hidekazoo/gatsby-crudzoo
```

or using yarn

```
yarn init -y
yarn add gatsby react react-dom https://github.com/Hidekazoo/gatsby-crudzoo
```

### package.json

#### Example

```
{
  "name": "your site name",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "private": true,
  "scripts": {
    "develop": "gatsby develop",
    "build": "gatsby build",
  },
  "dependencies": {
    "gatsby": "2.7.1",
    "react": "^16.8.6",
    "react-dom": "^16.8.6"
  }
}
```

### create gatsby-config.js

create gatsby-config.js and write your site settings

#### Example

**gatsby-config.js**

```javascript
module.exports = {
  siteMetadata: {
    title: `Crudzoo`,
    author: `hidekazoo`,
    description: ``,
    siteUrl: `https://crudzoo.com`,
    social: {
      twitter: `hidekazoo`
    }
  },
  __experimentalThemes: [`gatsby-crudzoo`]
};
```

### setting your profile picture

put on your profile picture on assets/profile-pic.jpg

### create your first page

Write your first post at markdown

#### Example

**content/hello-world/index.mdx**

```
---
title: Hello world
date: '2019-02-03T16:58:03.284Z'
update: '2019-05-23T16:58:03.284Z'
tags: ['hello world']
spoiler: 'hello world'
---

hello world!
```

### Folder Structure

```
    .
    ├── content
    │   └── hello-world
    │       └── index.mdx
    ├── assets
    │   └── profile-pic.jpg
    │
    ├── gatsby-config.js
    ├── package-lock.json
    └── package.json
```

### Start Developing

```
npm develop
```

or using yarn

```
yarn develop
```
