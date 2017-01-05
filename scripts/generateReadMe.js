var fs = require('fs');
var prependFile = require('prepend-file');
var marked = require('./marked.js');
marked.setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  mangle: true,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  xhtml: true
});

exports.runMD = function() {

  fs.readdir(__dirname + '/../src/components/docs/md', function(err, filenames) {
    if (err) throw err;
    filenames.forEach((filename) => {
      createHTML(filename);
    });
  });



  function createHTML(filename) {



    let inn = __dirname + '/../src/components/docs/md/' + filename;
    let filenameWO = filename.split('.')[0];
    filenameWO[0] === filenameWO[0].toUpperCase()
    let out = __dirname + '/../src/components/docs/' + filenameWO + '.js';

    //reset header-links
    fs.writeFileSync('header-links.txt', '');

    let readMe = fs.readFileSync(inn, 'utf-8');
    let markdownReadMe = marked(readMe);

    fs.writeFileSync(out, markdownReadMe);

    var headerLinks = fs.readFileSync('header-links.txt', 'utf-8');
    headerLinks = headerLinks.split('\n');

    readMe = fs.readFileSync(out, 'utf-8');
    readMe = readMe.split('\n');

    let i = 0;
    let headerLinkCounter = 0;
    let LinkLinkCounter = 0;
    while(readMe[i] !== undefined) {
      if (readMe[i].indexOf('<li>') > -1) {
        let first = readMe[i].split('>')[0];
        let second = readMe[i].split('>')[1];
        let third = second.split('<')[1];
        second = second.split('<')[0];

        if (second.indexOf('(deprecated)') > -1) {
          second = second.replace('(deprecated)','');
          first += '><span className="depreciated">'
            + '<Link to="/api/' + filenameWO + '#' + headerLinks[headerLinkCounter] + '">';
        }
        else {
          first += '><span>'
            + '<Link to="/api/' + filenameWO + '#' + headerLinks[headerLinkCounter] + '">';
        }

        if (third == "ul"){
          third = '</Link></span><ul>';
        }
        if (third == "/li") {
          third = '</Link></span></li>';
        }

        readMe[i] = first + second + third;

        headerLinkCounter++;
      }

      if (readMe[i].indexOf('<!--') > -1) {
        let content = readMe[i].split('<!--')[1];
        content = content.split('-->')[0];
        readMe[i] = '<div className="api_metadata"><span>'
          + content + '</span></div>';
      }

      if (readMe[i].indexOf('<h1') > -1 || readMe[i].indexOf('<h2') > -1 || readMe[i].indexOf('<h3') > -1 || readMe[i].indexOf('<h4') > -1 || readMe[i].indexOf('<h5') > -1){
        if (!(readMe[i].indexOf('Table of Contents') > -1)) {
          let num = readMe[i][2];
          let begin = readMe[i].split('>')[0];
          let first = readMe[i].split('>')[1];
          let content = first.split('<')[0];
          readMe[i] = begin + '>\n' + content
            + '\n<span>\n' + '<Link to="/api/' + filenameWO + '#' + headerLinks[LinkLinkCounter] + '" className="mark">#</Link>\n'
            + '</span>\n</h' + num + '>';

          LinkLinkCounter++;
        }

      }
      //console.log(readMe[i]);
      i++;
    }

    readMe = readMe.join('\n');

    fs.writeFileSync(out, readMe);

    //prepend and append react stuff:
    prependFile(out, `/* eslint-disable */
  import React, { Component } from 'react';
  import SyntaxHighlighter from 'react-syntax-highlighter';
  import { Link } from 'react-router';

  import Stability from './objs/stability';

  import '../Content.css';


  class ` + filenameWO + ` extends Component {

    render() {
      return (
        <div className="Content">\n`, function (err) {if (err) throw err;});

      fs.appendFile(out, `
      </div>
      );
    }
  }

  export default ` + filenameWO + ';', function (err) {
        if (err) throw err;
      });
  }
}
