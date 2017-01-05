/* eslint-disable */
  import React, { Component } from 'react';
  import SyntaxHighlighter from 'react-syntax-highlighter';
  import { Link } from 'react-router';

  import Stability from './objs/stability';

  import '../Content.css';


  class Documentation extends Component {

    render() {
      return (
        <div className="Content">
<div id="toc">
<h2>Table of Contents</h2>
<ul>
<li><span><Link to="/api/Documentation#about-this-documentation">About This Documentation</Link></span><ul>
<li><span><Link to="/api/Documentation#how-to-use">How to Use</Link></span><ul>
<li><span><Link to="/api/Documentation#creating-a-new-component">Creating a New Component</Link></span></li>
<li><span><Link to="/api/Documentation#updating-the-color-scheme">Updating the Color Scheme</Link></span></li>
<li><span><Link to="/api/Documentation#caveats">Caveats</Link></span></li>
</ul>
</li>
<li><span><Link to="/api/Documentation#stability-index">Stability Index</Link></span></li>
<li><span><Link to="/api/Documentation#details">Details</Link></span><ul>
<li><span><Link to="/api/Documentation#tree-representation">Tree Representation</Link></span></li>
<li><span><Link to="/api/Documentation#cheat-sheet">Cheat Sheet</Link></span></li>
<li><span><Link to="/api/Documentation#example-of-code">Example of Code</Link></span></li>
<li><span className="depreciated"><Link to="/api/Documentation#">This is an example of deprecated </Link></span></li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
<h1 id="about-this-documentation">
About This Documentation
<span>
<Link to="/api/Documentation#about-this-documentation" className="mark">#</Link>
</span>
</h1>
<p>The idea behind this project was to make it as simple as possible to hit the ground running making documentation for your <code>API</code>. As I couldn&#39;t find any high quality <code>MD</code> to react blog or docs I decided to take it upon myself as I have plans for a bigger project.</p>
<p>I wanted to keep the project as simple as possible while not taking away from the aesthetics and keeping it easy to create more modules. Ideally, you should be hitting the ground running within 10-15 minutes.</p>
<p>Quite obviously this is a <code>React</code> copy of Node.js Documentation. I was impressed with how easy to navigate their site and how easy it was to get information on modules and functions.</p>
<Stability stability={2} />
<h2 id="how-to-use">
How to Use
<span>
<Link to="/api/Documentation#how-to-use" className="mark">#</Link>
</span>
</h2>
<div className="api_metadata"><span> added: v0.1.5 </span></div>
<p>Assuming you know React, the learning curve should be negligible. Note that you don&#39;t have to create the <code>.js</code> equivalent; this will be added automatically every time you <code>node start</code> and every time you refresh inside the <code>webpack-dev-server</code>. Below, I will explain how to setup new modules and where to change colors.</p>
<h3 id="creating-a-new-component">
Creating a New Component
<span>
<Link to="/api/Documentation#creating-a-new-component" className="mark">#</Link>
</span>
</h3>
<div className="api_metadata"><span> added: v0.1.8 </span></div>
<p><strong>STEP ONE</strong></p>
<p>First, add a new <code>MD</code> file to <code>src/components/docs/md</code>. This is where you should keep all new content. <strong>Important</strong>: Be sure to capitalize the first letter in the <code>MD</code> file, otherwise you will run into an error.</p>
<p>Be sure to add a Table of Contents to the top. For more information see the <Link to="/api/Documentation#cheat-sheet">Cheat Sheet</Link> provided.</p>
<p><em>UPDATE</em> - The requirement to capitalize the first letter is no longer necessary.</p>
<p><strong>STEP TWO</strong></p>
<p>Next, add the file to <code>index.js</code>.</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`// index.js
import File from './components/docs/File';

...

<Route path="/api" component={App}>
  <IndexRoute component={Home}/>
  <Route path="/api/documentation" component={Documentation}/>
  <Route path="/api/synopsis" component={Synopsis}/>
  <Route path="/api/file" component={File}/>

</Route>`}</SyntaxHighlighter>
<p><strong>STEP THREE</strong></p>
<p>One more step, in the <code>Toc.js</code> file we need to add a <code>NavLink</code> to direct to the content file. <code>NavLink</code> will ensure that after clicking on the navigation link, it will stay selected.</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`<ul>
  <li><span><Link to="/api/Documentation#undefined">undefined
    <NavLink to="#">Example NavLink</NavLink>
  </li>
  <li><span><Link to="/api/Documentation#undefined">undefined
    <NavLink to="#">Example NavLink</NavLink>
  </li>
  <li><span><Link to="/api/Documentation#undefined">undefined
    <NavLink to="/api/file">File</NavLink>
  </li>
</ul>`}</SyntaxHighlighter>
<h3 id="updating-the-color-scheme">
Updating the Color Scheme
<span>
<Link to="/api/Documentation#updating-the-color-scheme" className="mark">#</Link>
</span>
</h3>
<p>Each component has it&#39;s own <code>.css</code> file. However, if you want to change the look and feel of the <code>MD</code> files, look to the <code>Content.css</code> file. All core html styles and api-stability tags, look to <code>index.css</code>.</p>
<h3 id="caveats">
Caveats
<span>
<Link to="/api/Documentation#caveats" className="mark">#</Link>
</span>
</h3>
<div className="api_metadata"><span> added: v0.1.5 </span></div>
<p>Due to how this system operates, certain react components and lexical systems require specific input from your <code>MD</code> files for stability. Listed below are problems you could potentially run into.</p>
<p><strong>SPACING:</strong></p>
<p>Some sections will <code>error</code> if there isn&#39;t proper spacing in-between sections.</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`'BAD':
> Stability: 0 - Deprecated
<! -- added: v 0.1.5 -- >

'GOOD':
> Stability: 0 - Deprecated

<! -- added: v 0.1.5 -- >`}</SyntaxHighlighter>
<p><strong>CODE:</strong></p>
<p>Currently code tags are wrapped in a <code>code</code> tag [ ` ]. Be sure to use the <code>\</code> backslash code to not cause an error.</p>
<p><strong>STABILITY:</strong></p>
<p>Use of multiple <code>Stability</code> components in a row requires the user to space them with html comment tags.</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`'BAD':
> Stability: 0 - Deprecated

> Stability: 1 - Experimental

'GOOD':
> Stability: 0 - Deprecated

<! -- -- >

> Stability: 1 - Experimental`}</SyntaxHighlighter>
<h2 id="stability-index">
Stability Index
<span>
<Link to="/api/Documentation#stability-index" className="mark">#</Link>
</span>
</h2>
<p>Throughout the documentation, you will see indications of a section&#39;s stability. The idea is to keep updated components that are unlikely to ever change at all. Others may be brand new and experimental, or known to be hazardous and in the process of being redesigned.</p>
<p>The stability indices are as follows:</p>
<Stability stability={0} content="This feature is known to be problematic, and changes are planned. Do not rely on it. Use of the feature may cause warnings. Backwards compatibility should not be expected." />
<div className="api_metadata"><span> </span></div>
<Stability stability={1} content="This feature is subject to change, and is gated by a command line flag. It may change or be removed in future versions." />
<div className="api_metadata"><span> </span></div>
<Stability stability={2} content="The API has proven satisfactory. Compatibility with the npm ecosystem is a high priority, and will not be broken unless absolutely necessary." />
<div className="api_metadata"><span> </span></div>
<Stability stability={3} content="Only fixes related to security, performance, or bug fixes will be accepted. Please do not suggest API changes in this area; they will be refused." />
<div className="api_metadata"><span> </span></div>
<h2 id="details">
Details
<span>
<Link to="/api/Documentation#details" className="mark">#</Link>
</span>
</h2>
<div className="api_metadata"><span> added: v0.1.7 </span></div>
<p>Below gives a more detailed description of the content available.</p>
<h3 id="tree-representation">
Tree Representation
<span>
<Link to="/api/Documentation#tree-representation" className="mark">#</Link>
</span>
</h3>
<div className="api_metadata"><span> added: v0.1.0 </span></div>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`.
├── App.css
├── App.js
├── App.test.js
├── Example.css
├── Example.js
├── components
│   ├── Content.css
│   ├── Content.js
│   ├── Header.css
│   ├── Header.js
│   ├── Home.css
│   ├── Home.js
│   ├── NavLink.js
│   ├── Navigation.css
│   ├── Navigation.js
│   ├── Toc.js
│   └── docs
│       ├── Documentation.js
│       ├── Synopsis.js
│       ├── md
│       │   ├── Documentation.md
│       │   └── Synopsis.md
│       └── objs
│           ├── codeify.js
│           └── stability.js
├── index.css
└── index.js`}</SyntaxHighlighter>
<h3 id="cheat-sheet">
Cheat Sheet
<span>
<Link to="/api/Documentation#cheat-sheet" className="mark">#</Link>
</span>
</h3>
<div className="api_metadata"><span> added: v0.1.3 </span></div>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`// Headers
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
<! -- added: v0.1.3 -- >`}</SyntaxHighlighter>
<h3 id="example-of-code">
Example of Code
<span>
<Link to="/api/Documentation#example-of-code" className="mark">#</Link>
</span>
</h3>
<div className="api_metadata"><span> added: v0.1.4 </span></div>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`function stableSort(v, f)
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
}`}</SyntaxHighlighter>

      </div>
      );
    }
  }

  export default Documentation;