# ExampleDoc

### Write MD file docs and have them seemlessly merge into this boilerplate!

This was built with lots of coffee and time... Feel free to star this project! ;)



## Install & Go

```

git clone https://github.com/CraigglesO/ExampleDocs.git

npm install

npm start
```

navigate to localhost:3000/api to see it in action!

# Docs in action:

![alt tag](https://github.com/CraigglesO/ExampleDocs/blob/master/img/view1.png)
![alt tag](https://github.com/CraigglesO/ExampleDocs/blob/master/img/view2.png)


# About This Documentation

The idea behind this project was to make it as simple as possible to hit the ground running making documentation for your `API`. As I couldn't find any high quality `MD` to react blog or docs I decided to take it upon myself as I have plans for a bigger project.

I wanted to keep the project as simple as possible while not taking away from the aesthetics and keeping it easy to create more modules. Ideally, you should be hitting the ground running within 10-15 minutes.

Quite obviously this is a `React` copy of Node.js Documentation. I was impressed with how easy to navigate their site and how easy it was to get information on modules and functions.

> Stability: 2 - Stable

## How to Use
<!-- added: v0.1.5 -->

Assuming you know React, the learning curve should be negligible. Note that you don't have to create the `.js` equivalent; this will be added automatically every time you `node start` and every time you refresh inside the `webpack-dev-server`. Below, I will explain how to setup new modules and where to change colors.

### Creating a New Component
<!-- added: v0.1.8 -->

__STEP ONE__

First, add a new `MD` file to `src/components/docs/md`. This is where you should keep all new content. __Important__: Be sure to capitalize the first letter in the `MD` file, otherwise you will run into an error.

Be sure to add a Table of Contents to the top. For more information see the [Cheat Sheet] provided.

*UPDATE* - The requirement to capitalize the first letter is no longer necessary.

__STEP TWO__

Next, add the file to `index.js`.

```js
// index.js
import File from './components/docs/File';

...

<Route path="/api" component={App}>
  <IndexRoute component={Home}/>
  <Route path="/api/documentation" component={Documentation}/>
  <Route path="/api/synopsis" component={Synopsis}/>
  <Route path="/api/file" component={File}/>

</Route>
```

__STEP THREE__

One more step, in the `Toc.js` file we need to add a `NavLink` to direct to the content file. `NavLink` will ensure that after clicking on the navigation link, it will stay selected.

```js
<ul>
  <li>
    <NavLink to="#">Example NavLink</NavLink>
  </li>
  <li>
    <NavLink to="#">Example NavLink</NavLink>
  </li>
  <li>
    <NavLink to="/api/file">File</NavLink>
  </li>
</ul>
```

### Updating the Color Scheme

Each component has it's own `.css` file. However, if you want to change the look and feel of the `MD` files, look to the `Content.css` file. All core html styles and api-stability tags, look to `index.css`.

### Caveats
<!-- added: v0.1.5 -->

Due to how this system operates, certain react components and lexical systems require specific input from your `MD` files for stability. Listed below are problems you could potentially run into.

__SPACING:__

Some sections will `error` if there isn't proper spacing in-between sections.

```js
'BAD':
> Stability: 0 - Deprecated
<! -- added: v 0.1.5 -- >

'GOOD':
> Stability: 0 - Deprecated

<! -- added: v 0.1.5 -- >
```

__CODE:__

Currently code tags are wrapped in a `code` tag [ \` ]. Be sure to use the `\` backslash code to not cause an error.

__STABILITY:__

Use of multiple `Stability` components in a row requires the user to space them with html comment tags.

```js
'BAD':
> Stability: 0 - Deprecated

> Stability: 1 - Experimental

'GOOD':
> Stability: 0 - Deprecated

<! -- -- >

> Stability: 1 - Experimental
```

## Stability Index

Throughout the documentation, you will see indications of a section's stability. The idea is to keep updated components that are unlikely to ever change at all. Others may be brand new and experimental, or known to be hazardous and in the process of being redesigned.

The stability indices are as follows:

> Stability: 0 - Deprecated (This feature is known to be problematic, and changes are planned. Do not rely on it. Use of the feature may cause warnings. Backwards compatibility should not be expected.)

<!-- -->

> Stability: 1 - Experimental (This feature is subject to change, and is gated by a command line flag. It may change or be removed in future versions.)

<!-- -->

> Stability: 2 - Stable (The API has proven satisfactory. Compatibility with the npm ecosystem is a high priority, and will not be broken unless absolutely necessary.)

<!-- -->

> Stability: 3 - Locked (Only fixes related to security, performance, or bug fixes will be accepted. Please do not suggest API changes in this area; they will be refused.)

<!-- -->

## Details
<!-- added: v0.1.7 -->

Below gives a more detailed description of the content available.

### Tree Representation
<!-- added: v0.1.0 -->

```js
.
├── App.css
├── App.js
├── App.test.js
├── Example.css
├── Example.js
├── components
│   ├── Content.css
│   ├── Content.js
│   ├── Header.css
│   ├── Header.js
│   ├── Home.css
│   ├── Home.js
│   ├── NavLink.js
│   ├── Navigation.css
│   ├── Navigation.js
│   ├── Toc.js
│   └── docs
│       ├── Documentation.js
│       ├── Synopsis.js
│       ├── md
│       │   ├── Documentation.md
│       │   └── Synopsis.md
│       └── objs
│           ├── codeify.js
│           └── stability.js
├── index.css
└── index.js
```

### Cheat Sheet
<!-- added: v0.1.3 -->
```js
// Headers
# This is an H1
## This is an H2
### This is an H3
#### This is an H4
##### This is an H5

// Stability - '()' represents the content inside

> Stability: 0 - Deprecated ()
> Stability: 1 - Experimental ()
> Stability: 2 - Stable ()
> Stability: 3 - Locked ()

// Link
- Inline Version:
[Link](https://www.github.com)

- Referenced:
This is a [Link] inside paragraphs
At the bottom add:
[Link]: /api/Documentation#cheat-sheet

// bold
This is **bold**

// italic
This is _italic_

// scratched
This is ~~scratched~~

// Table of Contents
---
+ About This Documentation
  - How to Use
  - Stability Index
  + Details
    - Tree Representation
    - Cheat Sheet
    - This is an example of deprecated (deprecated)
---

// code
'''js
This is code
Let Doc = true;
return Doc;
'''
OR
To wrap one word use 'code'

//Version comment
<! -- added: v0.1.3 -- >
```

### Example of Code
<!-- added: v0.1.4 -->

```js
function stableSort(v, f)
{
    if (f === undefined) {
        f = function(a, b) {
            a = ""+a; b = ""+b;
            return a < b ? -1 : (a > b ? 1 : 0);
        }
    }
    var dv = [];
    for (var i=0; i<v.length; i++) {
        dv[i] = [v[i], i];
    }
    dv.sort(function(a, b){
              return f(a[0], b[0]) || (a[1] - b[1]);
            });
    for (var i=0; i<v.length; i++) {
        v[i] = dv[i][0];
    }
}
```

[Cheat Sheet]: /api/Documentation#cheat-sheet
