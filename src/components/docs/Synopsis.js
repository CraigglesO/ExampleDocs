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
<li><span><Link to="/api/Synopsis#assert">Assert</Link></span><ul>
<li><span className="depreciated"><Link to="/api/Synopsis#assert-value-message-">assert(value[, message]) </Link></span></li>
<li><span><Link to="/api/Synopsis#assert-deepequal-actual-expected-message-">assert.deepEqual(actual, expected[, message])</Link></span><ul>
<li><span><Link to="/api/Synopsis#assert-deepstrictequal-actual-expected-message-">assert.deepStrictEqual(actual, expected[, message])</Link></span></li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
<h1 id="assert">
Assert
<span>
<Link to="/api/Synopsis#assert" className="mark">#</Link>
</span>
</h1>
<Stability stability={3} content="this is content" />
<p>blah blah</p>
<Stability stability={3} />
<p>The <code>assert</code> module provides a simple set of assertion tests that can be used to
test invariants. The module is intended for internal use by Node.js, but can be
used in application code via <code>require(&#39;assert&#39;)</code>. However, <code>assert</code> is not a
testing framework, and is not intended to be used as a general purpose assertion
library.</p>
<p>The API for the <code>assert</code> module is <Link to="documentation.html#documentation_stability_index">Locked</Link>. This means that there will be no
additions or changes to any of the methods implemented and exposed by
the module.</p>
<h2 id="assert-value-message-">
assert(value[, message])
<span>
<Link to="/api/Synopsis#assert-value-message-" className="mark">#</Link>
</span>
</h2>
<div className="api_metadata"><span> added: v0.5.9 </span></div>
<p>An alias of <Link to="#assert_assert_ok_value_message"><code>assert.ok()</code></Link> .</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`const assert = require('assert');

assert(true);
// OK
assert(1);
// OK
assert(false);
// throws "AssertionError: false == true"
assert(0);
// throws "AssertionError: 0 == true"
assert(false, 'it\'s false');
// throws "AssertionError: it's false"`}</SyntaxHighlighter>
<h3 id="assert-deepequal-actual-expected-message-">
assert.deepEqual(actual, expected[, message])
<span>
<Link to="/api/Synopsis#assert-deepequal-actual-expected-message-" className="mark">#</Link>
</span>
</h3>
<div className="api_metadata"><span> added: v0.1.21 </span></div>
<p>Tests for deep equality between the <code>actual</code> and <code>expected</code> parameters.
Primitive values are compared with the equal comparison operator ( <code>==</code> ).</p>
<p>Only enumerable &quot;own&quot; properties are considered. The <code>deepEqual()</code>
implementation does not test object prototypes, attached symbols, or
non-enumerable properties. This can lead to some potentially surprising
results. For example, the following example does not throw an <code>AssertionError</code>
because the properties on the <Link to="errors.html#errors_class_error"><code>Error</code></Link> object are non-enumerable:</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`// WARNING: This does not throw an AssertionError!
assert.deepEqual(Error('a'), Error('b'));`}</SyntaxHighlighter>
<p>&quot;Deep&quot; equality means that the enumerable &quot;own&quot; properties of child objects
are evaluated also:</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`const assert = require('assert');

const obj1 = {
  a : {
    b : 1
  }
};
const obj2 = {
  a : {
    b : 2
  }
};
const obj3 = {
  a : {
    b : 1
  }
};
const obj4 = Object.create(obj1);

assert.deepEqual(obj1, obj1);
// OK, object is equal to itself

assert.deepEqual(obj1, obj2);
// AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } }
// values of b are different

assert.deepEqual(obj1, obj3);
// OK, objects are equal

assert.deepEqual(obj1, obj4);
// AssertionError: { a: { b: 1 } } deepEqual {}
// Prototypes are ignored`}</SyntaxHighlighter>
<p>If the values are not equal, an <code>AssertionError</code> is thrown with a <code>message</code>
property set equal to the value of the <code>message</code> parameter. If the <code>message</code>
parameter is undefined, a default error message is assigned.</p>
<h2 id="assert-deepstrictequal-actual-expected-message-">
assert.deepStrictEqual(actual, expected[, message])
<span>
<Link to="/api/Synopsis#assert-deepstrictequal-actual-expected-message-" className="mark">#</Link>
</span>
</h2>
<div className="api_metadata"><span> added: v1.2.0 </span></div>
<p>Generally identical to <code>assert.deepEqual()</code> with two exceptions. First,
primitive values are compared using the strict equality operator ( <code>===</code> ).
Second, object comparisons include a strict equality check of their prototypes.</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`const assert = require('assert');

assert.deepEqual({a:1}, {a:'1'});
// OK, because 1 == '1'

assert.deepStrictEqual({a:1}, {a:'1'});
// AssertionError: { a: 1 } deepStrictEqual { a: '1' }
// because 1 !== '1' using strict equality`}</SyntaxHighlighter>
<p>If the values are not equal, an <code>AssertionError</code> is thrown with a <code>message</code>
property set equal to the value of the <code>message</code> parameter. If the <code>message</code>
parameter is undefined, a default error message is assigned.</p>
<h2 id="assert-doesnotthrow-block-error-message-">
assert.doesNotThrow(block[, error][, message])
<span>
<Link to="/api/Synopsis#assert-doesnotthrow-block-error-message-" className="mark">#</Link>
</span>
</h2>
<div className="api_metadata"><span> added: v0.1.21 </span></div>
<p>Asserts that the function <code>block</code> does not throw an error. See
<Link to="#assert_assert_throws_block_error_message"><code>assert.throws()</code></Link> for more details.</p>
<p>When <code>assert.doesNotThrow()</code> is called, it will immediately call the <code>block</code>
function.</p>
<p>If an error is thrown and it is the same type as that specified by the <code>error</code>
parameter, then an <code>AssertionError</code> is thrown. If the error is of a different
type, or if the <code>error</code> parameter is undefined, the error is propagated back
to the caller.</p>
<p>The following, for instance, will throw the <Link to="errors.html#errors_class_typeerror"><code>TypeError</code></Link> because there is no
matching error type in the assertion:</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`assert.doesNotThrow(
  () => {
    throw new TypeError('Wrong value');
  },
  SyntaxError
);`}</SyntaxHighlighter>
<p>However, the following will result in an <code>AssertionError</code> with the message
&#39;Got unwanted exception (TypeError)..&#39;:</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`assert.doesNotThrow(
  () => {
    throw new TypeError('Wrong value');
  },
  TypeError
);`}</SyntaxHighlighter>
<p>If an <code>AssertionError</code> is thrown and a value is provided for the <code>message</code>
parameter, the value of <code>message</code> will be appended to the <code>AssertionError</code>
message:</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`assert.doesNotThrow(
  () => {
    throw new TypeError('Wrong value');
  },
  TypeError,
  'Whoops'
);
// Throws: AssertionError: Got unwanted exception (TypeError). Whoops`}</SyntaxHighlighter>
<h2 id="assert-equal-actual-expected-message-">
assert.equal(actual, expected[, message])
<span>
<Link to="/api/Synopsis#assert-equal-actual-expected-message-" className="mark">#</Link>
</span>
</h2>
<div className="api_metadata"><span> added: v0.1.21 </span></div>
<p>Tests shallow, coercive equality between the <code>actual</code> and <code>expected</code> parameters
using the equal comparison operator ( <code>==</code> ).</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`const assert = require('assert');

assert.equal(1, 1);
// OK, 1 == 1
assert.equal(1, '1');
// OK, 1 == '1'

assert.equal(1, 2);
// AssertionError: 1 == 2
assert.equal({a: {b: 1}}, {a: {b: 1}});
//AssertionError: { a: { b: 1 } } == { a: { b: 1 } }`}</SyntaxHighlighter>
<p>If the values are not equal, an <code>AssertionError</code> is thrown with a <code>message</code>
property set equal to the value of the <code>message</code> parameter. If the <code>message</code>
parameter is undefined, a default error message is assigned.</p>
<h2 id="assert-fail-actual-expected-message-operator-">
assert.fail(actual, expected, message, operator)
<span>
<Link to="/api/Synopsis#assert-fail-actual-expected-message-operator-" className="mark">#</Link>
</span>
</h2>
<div className="api_metadata"><span> added: v0.1.21 </span></div>
<p>Throws an <code>AssertionError</code>. If <code>message</code> is falsy, the error message is set as
the values of <code>actual</code> and <code>expected</code> separated by the provided <code>operator</code>.
Otherwise, the error message is the value of <code>message</code>.</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`const assert = require('assert');

assert.fail(1, 2, undefined, '>');
// AssertionError: 1 > 2

assert.fail(1, 2, 'whoops', '>');
// AssertionError: whoops`}</SyntaxHighlighter>
<h2 id="assert-iferror-value-">
assert.ifError(value)
<span>
<Link to="/api/Synopsis#assert-iferror-value-" className="mark">#</Link>
</span>
</h2>
<div className="api_metadata"><span> added: v0.1.97 </span></div>
<p>Throws <code>value</code> if <code>value</code> is truthy. This is useful when testing the <code>error</code>
argument in callbacks.</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`const assert = require('assert');

assert.ifError(0);
// OK
assert.ifError(1);
// Throws 1
assert.ifError('error');
// Throws 'error'
assert.ifError(new Error());
// Throws Error`}</SyntaxHighlighter>
<h2 id="assert-notdeepequal-actual-expected-message-">
assert.notDeepEqual(actual, expected[, message])
<span>
<Link to="/api/Synopsis#assert-notdeepequal-actual-expected-message-" className="mark">#</Link>
</span>
</h2>
<div className="api_metadata"><span> added: v0.1.21 </span></div>
<p>Tests for any deep inequality. Opposite of <Link to="#assert_assert_deepequal_actual_expected_message"><code>assert.deepEqual()</code></Link>.</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`const assert = require('assert');

const obj1 = {
  a : {
    b : 1
  }
};
const obj2 = {
  a : {
    b : 2
  }
};
const obj3 = {
  a : {
    b : 1
  }
};
const obj4 = Object.create(obj1);

assert.notDeepEqual(obj1, obj1);
// AssertionError: { a: { b: 1 } } notDeepEqual { a: { b: 1 } }

assert.notDeepEqual(obj1, obj2);
// OK, obj1 and obj2 are not deeply equal

assert.notDeepEqual(obj1, obj3);
// AssertionError: { a: { b: 1 } } notDeepEqual { a: { b: 1 } }

assert.notDeepEqual(obj1, obj4);
// OK, obj1 and obj2 are not deeply equal`}</SyntaxHighlighter>
<p>If the values are deeply equal, an <code>AssertionError</code> is thrown with a <code>message</code>
property set equal to the value of the <code>message</code> parameter. If the <code>message</code>
parameter is undefined, a default error message is assigned.</p>
<h2 id="assert-notdeepstrictequal-actual-expected-message-">
assert.notDeepStrictEqual(actual, expected[, message])
<span>
<Link to="/api/Synopsis#assert-notdeepstrictequal-actual-expected-message-" className="mark">#</Link>
</span>
</h2>
<div className="api_metadata"><span> added: v1.2.0 </span></div>
<p>Tests for deep strict inequality. Opposite of <Link to="#assert_assert_deepstrictequal_actual_expected_message"><code>assert.deepStrictEqual()</code></Link>.</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`const assert = require('assert');

assert.notDeepEqual({a:1}, {a:'1'});
// AssertionError: { a: 1 } notDeepEqual { a: '1' }

assert.notDeepStrictEqual({a:1}, {a:'1'});
// OK`}</SyntaxHighlighter>
<p>If the values are deeply and strictly equal, an <code>AssertionError</code> is thrown
with a <code>message</code> property set equal to the value of the <code>message</code> parameter. If
the <code>message</code> parameter is undefined, a default error message is assigned.</p>
<h2 id="assert-notequal-actual-expected-message-">
assert.notEqual(actual, expected[, message])
<span>
<Link to="/api/Synopsis#assert-notequal-actual-expected-message-" className="mark">#</Link>
</span>
</h2>
<div className="api_metadata"><span> added: v0.1.21 </span></div>
<p>Tests shallow, coercive inequality with the not equal comparison operator
( <code>!=</code> ).</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`const assert = require('assert');

assert.notEqual(1, 2);
// OK

assert.notEqual(1, 1);
// AssertionError: 1 != 1

assert.notEqual(1, '1');
// AssertionError: 1 != '1'`}</SyntaxHighlighter>
<p>If the values are equal, an <code>AssertionError</code> is thrown with a <code>message</code>
property set equal to the value of the <code>message</code> parameter. If the <code>message</code>
parameter is undefined, a default error message is assigned.</p>
<h2 id="assert-notstrictequal-actual-expected-message-">
assert.notStrictEqual(actual, expected[, message])
<span>
<Link to="/api/Synopsis#assert-notstrictequal-actual-expected-message-" className="mark">#</Link>
</span>
</h2>
<div className="api_metadata"><span> added: v0.1.21 </span></div>
<p>Tests strict inequality as determined by the strict not equal operator
( <code>!==</code> ).</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`const assert = require('assert');

assert.notStrictEqual(1, 2);
// OK

assert.notStrictEqual(1, 1);
// AssertionError: 1 !== 1

assert.notStrictEqual(1, '1');
// OK`}</SyntaxHighlighter>
<p>If the values are strictly equal, an <code>AssertionError</code> is thrown with a
<code>message</code> property set equal to the value of the <code>message</code> parameter. If the
<code>message</code> parameter is undefined, a default error message is assigned.</p>
<h2 id="assert-ok-value-message-">
assert.ok(value[, message])
<span>
<Link to="/api/Synopsis#assert-ok-value-message-" className="mark">#</Link>
</span>
</h2>
<div className="api_metadata"><span> added: v0.1.21 </span></div>
<p>Tests if <code>value</code> is truthy. It is equivalent to
<code>assert.equal(!!value, true, message)</code>.</p>
<p>If <code>value</code> is not truthy, an <code>AssertionError</code> is thrown with a <code>message</code>
property set equal to the value of the <code>message</code> parameter. If the <code>message</code>
parameter is <code>undefined</code>, a default error message is assigned.</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`const assert = require('assert');

assert.ok(true);
// OK
assert.ok(1);
// OK
assert.ok(false);
// throws "AssertionError: false == true"
assert.ok(0);
// throws "AssertionError: 0 == true"
assert.ok(false, 'it\'s false');
// throws "AssertionError: it's false"`}</SyntaxHighlighter>
<h2 id="assert-strictequal-actual-expected-message-">
assert.strictEqual(actual, expected[, message])
<span>
<Link to="/api/Synopsis#assert-strictequal-actual-expected-message-" className="mark">#</Link>
</span>
</h2>
<div className="api_metadata"><span> added: v0.1.21 </span></div>
<p>Tests strict equality as determined by the strict equality operator ( <code>===</code> ).</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`const assert = require('assert');

assert.strictEqual(1, 2);
// AssertionError: 1 === 2

assert.strictEqual(1, 1);
// OK

assert.strictEqual(1, '1');
// AssertionError: 1 === '1'`}</SyntaxHighlighter>
<p>If the values are not strictly equal, an <code>AssertionError</code> is thrown with a
<code>message</code> property set equal to the value of the <code>message</code> parameter. If the
<code>message</code> parameter is undefined, a default error message is assigned.</p>
<h2 id="assert-throws-block-error-message-">
assert.throws(block[, error][, message])
<span>
<Link to="/api/Synopsis#assert-throws-block-error-message-" className="mark">#</Link>
</span>
</h2>
<div className="api_metadata"><span> added: v0.1.21 </span></div>
<p>Expects the function <code>block</code> to throw an error.</p>
<p>If specified, <code>error</code> can be a constructor, <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"><code>RegExp</code></Link>, or validation
function.</p>
<p>If specified, <code>message</code> will be the message provided by the <code>AssertionError</code> if
the block fails to throw.</p>
<p>Validate instanceof using constructor:</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`assert.throws(
  () => {
    throw new Error('Wrong value');
  },
  Error
);`}</SyntaxHighlighter>
<p>Validate error message using <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"><code>RegExp</code></Link>:</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`assert.throws(
  () => {
    throw new Error('Wrong value');
  },
  /value/
);`}</SyntaxHighlighter>
<p>Custom error validation:</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`assert.throws(
  () => {
    throw new Error('Wrong value');
  },
  function(err) {
    if ( (err instanceof Error) && /value/.test(err) ) {
      return true;
    }
  },
  'unexpected error'
);`}</SyntaxHighlighter>
<p>Note that <code>error</code> can not be a string. If a string is provided as the second
argument, then <code>error</code> is assumed to be omitted and the string will be used for
<code>message</code> instead. This can lead to easy-to-miss mistakes:</p>
<SyntaxHighlighter className="syntaxCode" language='javascript'>{`// THIS IS A MISTAKE! DO NOT DO THIS!
assert.throws(myFunction, 'missing foo', 'did not throw with expected message');

// Do this instead.
assert.throws(myFunction, /missing foo/, 'did not throw with expected message');`}</SyntaxHighlighter>

      </div>
      );
    }
  }

  export default Synopsis;