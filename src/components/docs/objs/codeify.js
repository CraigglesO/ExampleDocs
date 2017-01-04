import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Link } from 'react-router';

export default React.createClass({

  render() {

    return (
        <SyntaxHighlighter className="syntaxCode" language='javascript'>
          {this.props.code}
        </SyntaxHighlighter>
    )

  }
});
