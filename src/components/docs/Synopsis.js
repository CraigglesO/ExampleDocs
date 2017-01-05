/* eslint-disable */
  import React, { Component } from 'react';
  import SyntaxHighlighter from 'react-syntax-highlighter';
  import { Link } from 'react-router';

  import Stability from './objs/stability';

  import '../Content.css';


  class Synopsis extends Component {

    render() {
      return (
        <div className="Content">
<div id="toc">
<h2>Table of Contents</h2>
<ul>
<li><span><Link to="/api/Synopsis#project-title">Project Title</Link></span><ul>
<li><span><Link to="/api/Synopsis#getting-started">Getting Started</Link></span><ul>
<li><span><Link to="/api/Synopsis#prerequisites">Prerequisites</Link></span></li>
<li><span><Link to="/api/Synopsis#installing">Installing</Link></span></li>
</ul>
</li>
<li><span><Link to="/api/Synopsis#running-the-tests">Running the tests</Link></span><ul>
<li><span><Link to="/api/Synopsis#break-down-into-end-to-end-tests">Break down into end to end tests</Link></span></li>
<li><span><Link to="/api/Synopsis#and-coding-style-tests">And coding style tests</Link></span></li>
</ul>
</li>
<li><span><Link to="/api/Synopsis#deployment">Deployment</Link></span></li>
<li><span><Link to="/api/Synopsis#built-with">Built With</Link></span></li>
<li><span><Link to="/api/Synopsis#contributing">Contributing</Link></span></li>
<li><span><Link to="/api/Synopsis#versioning">Versioning</Link></span></li>
<li><span><Link to="/api/Synopsis#authors">Authors</Link></span></li>
<li><span><Link to="/api/Synopsis#license">License</Link></span></li>
<li><span><Link to="/api/Synopsis#acknowledgments">Acknowledgments</Link></span></li>
</ul>
</li>
</ul>
</div>
<h1 id="project-title">
Project Title
<span>
<Link to="/api/Synopsis#project-title" className="mark">#</Link>
</span>
</h1>
<p>One Paragraph of project description goes here</p>
<h2 id="getting-started">
Getting Started
<span>
<Link to="/api/Synopsis#getting-started" className="mark">#</Link>
</span>
</h2>
<p>These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.</p>
<h3 id="prerequisites">
Prerequisites
<span>
<Link to="/api/Synopsis#prerequisites" className="mark">#</Link>
</span>
</h3>
<p>What things you need to install the software and how to install them</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`Give examples`}</SyntaxHighlighter>
<h3 id="installing">
Installing
<span>
<Link to="/api/Synopsis#installing" className="mark">#</Link>
</span>
</h3>
<p>A step by step series of examples that tell you have to get a development env running</p>
<p>Say what the step will be</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`Give the example`}</SyntaxHighlighter>
<p>And repeat</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`until finished`}</SyntaxHighlighter>
<p>End with an example of getting some data out of the system or using it for a little demo</p>
<h2 id="running-the-tests">
Running the tests
<span>
<Link to="/api/Synopsis#running-the-tests" className="mark">#</Link>
</span>
</h2>
<p>Explain how to run the automated tests for this system</p>
<h3 id="break-down-into-end-to-end-tests">
Break down into end to end tests
<span>
<Link to="/api/Synopsis#break-down-into-end-to-end-tests" className="mark">#</Link>
</span>
</h3>
<p>Explain what these tests test and why</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`Give an example`}</SyntaxHighlighter>
<h3 id="and-coding-style-tests">
And coding style tests
<span>
<Link to="/api/Synopsis#and-coding-style-tests" className="mark">#</Link>
</span>
</h3>
<p>Explain what these tests test and why</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`Give an example`}</SyntaxHighlighter>
<h2 id="deployment">
Deployment
<span>
<Link to="/api/Synopsis#deployment" className="mark">#</Link>
</span>
</h2>
<p>Add additional notes about how to deploy this on a live system</p>
<h2 id="built-with">
Built With
<span>
<Link to="/api/Synopsis#built-with" className="mark">#</Link>
</span>
</h2>
<p><a href="http://www.dropwizard.io/1.0.2/docs/">Dropwizard</a> - The web framework used
<Link to="https://maven.apache.org/">Maven</Link> - Dependency Management
<Link to="https://rometools.github.io/rome/">ROME</Link> - Used to generate RSS Feeds</p>
<h2 id="contributing">
Contributing
<span>
<Link to="/api/Synopsis#contributing" className="mark">#</Link>
</span>
</h2>
<p>Please read <Link to="https://gist.github.com/PurpleBooth/b24679402957c63ec426">CONTRIBUTING.md</Link> for details on our code of conduct, and the process for submitting pull requests to us.</p>
<h2 id="versioning">
Versioning
<span>
<Link to="/api/Synopsis#versioning" className="mark">#</Link>
</span>
</h2>
<p>We use <a href="http://www.semver.org/">SemVer</a> for versioning. For the versions available, see the <Link to="https://github.com/your/project/tags">tags on this repository</Link>.</p>
<h2 id="authors">
Authors
<span>
<Link to="/api/Synopsis#authors" className="mark">#</Link>
</span>
</h2>
<p><strong>Craig OConnor</strong> - <a href="https://www.github.com/CraigglesO">Craig&#39;s Github</a></p>
<p>See also the list of <Link to="https://github.com/your/project/contributors">contributors</Link> who participated in this project.</p>
<h2 id="license">
License
<span>
<Link to="/api/Synopsis#license" className="mark">#</Link>
</span>
</h2>
<p>This project is licensed under the MIT License - see the <Link to="LICENSE.md">LICENSE.md</Link> file for details</p>
<h2 id="acknowledgments">
Acknowledgments
<span>
<Link to="/api/Synopsis#acknowledgments" className="mark">#</Link>
</span>
</h2>
<p>Hat tip to anyone who&#39;s code was used
Inspiration
etc</p>

      </div>
      );
    }
  }

  export default Synopsis;